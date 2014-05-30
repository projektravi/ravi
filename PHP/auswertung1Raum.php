<?php
// Zeitraum definieren
// Zeitraum definieren
if ($zeitraum == 1) {
	$ende_datum_parameter = "+0 days";
	$mitSamstag = true;
	$mitSonntag = true;
} else if ($zeitraum == 2) {
	$ende_datum_parameter = "+6 days";
} else if ($zeitraum == 3) {
	$ende_datum_parameter = "+4 week -1 day";
} else if ($zeitraum == 4) {	
	$ende_datum_parameter = "+6 month -1 day";
}
// An benötigtes Format anpassen
if (strlen($tag) == 1)
	$tag = "0".$tag;
if (strlen($monat) == 1)
	$monat = "0".$monat;
// Datum in brauchbarer Notation
$date_begin = $jahr."-".$monat."-".$tag;
// Ende-Datum berechnen
$date_ende = date('Y-m-d', strtotime($ende_datum_parameter, strtotime($date_begin)));
// Anzahl Tage berechnen
$anz_tage = gregoriantojd(
                date('m', strtotime($date_ende)),
                date('d', strtotime($date_ende)),
                date('Y', strtotime($date_ende)))
            - gregoriantojd(
                date('m', strtotime($date_begin)),
                date('d', strtotime($date_begin)),
                date('Y', strtotime($date_begin))) + 1;
// 0. Tag festlegen 
$aktueller_tag = date('Y-m-d', strtotime('-1 days', strtotime($date_begin)));
// Variablen initialisieren
$belegung_absolut_pro_tag = array();
$belegung_pro_tag_pro_stunde = array();
$belegt_gesamt = 0;
$i = 1;
$gewertete_tage = 0;
$stunden_beginn = 8;
$stunden_ende = 20;
$stunden_zaehler = $stunden_beginn;
$woche_tag = 0;
$woche_tag2 = 0;
$belegung_woche = 0;
$belegung_absolut_pro_woche = array();
$maximaleAnzahlTage = 7;
$belegung_pro_tag_pro_woche = array();
$belegung_absolut_pro_monat = array();
$anzahl_monat = 1;
$anzahl_wochen = 0;
$belegung_monat = 0;
$gewertete_tage_fuer_monatsauswertung = 0;
$ende_monat = date('Y-m-d', strtotime("+1 month -1 day" , strtotime($date_begin)));
$anfang_neuer_monat = date('Y-m-d', strtotime("+1 month" , strtotime($date_begin)));
if ($mitSamstag == false) {
	$maximaleAnzahlTage--;
}
if ($mitSonntag == false) {
	$maximaleAnzahlTage--;
}
// Schleifendurchlauf für den Zeitraum, pro Tag eine Schleife
for ($i = 1; $i <= ($anz_tage + 1); $i++) {
	// Daten für aktuellen Tag festlegen
	$aktueller_tag = date('Y-m-d', strtotime('+1 days', strtotime($aktueller_tag)));
	// Wochentag erhöhen
	$woche_tag++;
	// Ende der Woche erreicht? Daten ins Array schreiben
	if ($woche_tag == 8) {		
		$t_arr = array();
		$t_arr["Buchung_fuer"] = (($i-1) / 7) . ". Woche";	
		$t_arr["ProzBelegung"] = $belegung_woche / $maximaleAnzahlTage;
		$belegung_absolut_pro_woche[] = $t_arr;
		$belegung_woche = 0;
		$woche_tag = 1;
		$woche_tag2 = 0;		
		$anzahl_wochen++;
	}
	// Ende des Monats erreicht? Daten ins Array schreiben
	if (strtotime($aktueller_tag) > strtotime($ende_monat)) {
		$t_arr = array();
		$t_arr["Buchung_fuer"] = $anzahl_monat . ". Monat";	
		$t_arr["ProzBelegung"] = $belegung_monat / $gewertete_tage_fuer_monatsauswertung;
		$belegung_absolut_pro_monat[] = $t_arr;
		$belegung_monat = 0;
		$gewertete_tage_fuer_monatsauswertung = 0;
		$anzahl_monat++;
		$ende_monat = date('Y-m-d', strtotime("+1 month -1 day" , strtotime($anfang_neuer_monat)));
		$anfang_neuer_monat = date('Y-m-d', strtotime("+1 month" , strtotime($anfang_neuer_monat)));
	}
	// eigentliches Ende der Gesamtschleife erreicht?
	if ($i > $anz_tage) {
		break;
	}
	// Prüfung auf Samstag
	if (date('N', strtotime($aktueller_tag)) == 6 && $mitSamstag == false) {
		// Für das verwendete Diagramm bei der 6-Monatsauswahl muss Samstag mit dabei sein
		if ($zeitraum == 4) {
			// Daten verpacken für absolute Belegung pro Tag
			$t_arr = array();
			$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
			$t_arr["ProzBelegung"] = 0;
			// Daten für absolute Belegung pro Tag in Gesamtarray verpacken
			$belegung_absolut_pro_tag[] = $t_arr;	
		}
		continue;
	}
	// Prüfung auf Sonntag
	if (date('N', strtotime($aktueller_tag)) == 7 && $mitSonntag == false) {
		// Für das verwendete Diagramm bei der 6-Monatsauswahl muss Sonntag mit dabei sein
		if ($zeitraum == 4) {
			// Daten verpacken für absolute Belegung pro Tag
			$t_arr = array();
			$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
			$t_arr["ProzBelegung"] = 0;
			// Daten für absolute Belegung pro Tag in Gesamtarray verpacken
			$belegung_absolut_pro_tag[] = $t_arr;	
		}
		continue;
	}
	$gewertete_tage++;
	$woche_tag2++;
	$gewertete_tage_fuer_monatsauswertung++;
	// Daten für den aktuellen Tag sammeln
	$abfrage = "SELECT Buchung_fuer, Beginn, Ende, hour(Beginn) as Beginn_Stunde, minute(Beginn) as Beginn_Minuten, hour(Ende) as Ende_Stunde, minute(Ende) as Ende_Minuten
							FROM belegung 
							WHERE RaumID = ".$raumid." AND Buchung_fuer = '".$aktueller_tag."' 
							ORDER BY Buchung_fuer, Beginn";
	$ergebnis = mysql_query($abfrage);
	if (!$ergebnis) {
		echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
		exit;
	}
	// Daten auswerten
	$gesamt_belegung_in_h = 0;
	$belegung_in_h = 0;
	$stunden_arr = array();
	$belegte_zeitraeume = array();
	$belegt_in_dieser_stunde = 0;
	$stunden_zaehler = $stunden_beginn;
	while ($row = mysql_fetch_object($ergebnis)) {
		// Belegung absolut
		$belegung_in_h += ($row->Ende) - ($row->Beginn);
		// Belegung in Stunden
		$belegte_zeitraeume[] = [$row->Beginn_Stunde, $row->Beginn_Minuten, $row->Ende_Stunde, $row->Ende_Minuten];		
		//echo "<br> stunde " . $row->Beginn_Stunde . " minuten " . $row->Beginn_Minuten . " stunde " . $row->Ende_Stunde . " minuten " . $row->Ende_Minuten;
	}
	if ($belegung_in_h > 12) {
		$belegung_in_h = 12;
	}
	$gesamt_belegung_in_h = ($belegung_in_h * 100) / 12;
	$belegung_woche += $gesamt_belegung_in_h;
	$belegung_monat += $gesamt_belegung_in_h;
	$belegt_gesamt += $gesamt_belegung_in_h;
	// Daten verpacken für absolute Belegung pro Tag
	$t_arr = array();
	$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
	$t_arr["ProzBelegung"] = $gesamt_belegung_in_h;
	// Daten für absolute Belegung pro Tag in Gesamtarray verpacken
	$belegung_absolut_pro_tag[] = $t_arr;	
	// Daten verpacken für Belegung pro Tag und pro Stunde	
	while ($stunden_zaehler < $stunden_ende) {
		$belegt_in_dieser_stunde = 0;	
		unset($value);
		foreach ($belegte_zeitraeume as $value) {
			// liegt die Stunde in der Belegung
			$sa = $value[0];
			$ma = $value[1];
			$se = $value[2];
			$me = $value[3];
			// Belegung endet vor der Stunde 
			if ($se < $stunden_zaehler) {
				continue;
			}
			// Belegung fängt nach der Stunde an
			if ($sa > $stunden_zaehler) {
				break;
			}
			//echo "<br> aktuelle " . $stunden_zaehler . "stunde " . $sa . " minuten " . $ma . " stunde " . $se . " minuten " . $me;
			if ($stunden_zaehler >= $sa && $stunden_zaehler <= $se) {	
				if ($stunden_zaehler > $sa && $stunden_zaehler < $se) { // Belegung irgendwo dazwischen
					$belegt_in_dieser_stunde = 100;
					//echo "<br>hier1";
					break;					
				} else if ($stunden_zaehler == $sa && $stunden_zaehler == $se) { // Belegung beginnt und endet in dieser Stunde
					$belegt_in_dieser_stunde += (($me - $ma) * 100) / 60;
					//echo "<br>hier2";
				} else if ($stunden_zaehler == $sa) { // Belegung beginnt in dieser Stunde
					$belegt_in_dieser_stunde += ((60 - $ma) * 100) / 60;
					//echo "<br>hier3";
				} else if ($stunden_zaehler == $se && $me != 0) { // Belegung endet in dieser Stunde
					$belegt_in_dieser_stunde += ($me * 100) / 60;					
					//echo "<br>hier4";
				}
			}			
		}
		//echo "<br> aktuelle " . $stunden_zaehler . "belegt in dieser stunde " . $belegt_in_dieser_stunde;
		$t_arr = array();
		$t_arr["Stunde"] = $stunden_zaehler;
		$t_arr["Belegt"] = $belegt_in_dieser_stunde;	
		$stunden_arr[] = $t_arr;
		$stunden_zaehler++;
	}	
	$t_arr = array();
	$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
	$t_arr["StundenBelegung"] = $stunden_arr;
	$belegung_pro_tag_pro_stunde[] = $t_arr;
	// Belegung pro Tag pro Woche
	if (count($belegung_pro_tag_pro_woche) < $maximaleAnzahlTage) {
		// noch kein Eintrag vorhanden
		$t_arr = array();
		$t_arr["Buchung_fuer"] = date('l' ,strtotime($aktueller_tag));	
		$t_arr["StundenBelegung"] = $stunden_arr;
		$belegung_pro_tag_pro_woche[] = $t_arr;			
	} else {
		// Einträge erhöhen
		$t_arr = array();
		$t_arr = $belegung_pro_tag_pro_woche[$woche_tag2-1];
		$j = 0;
		unset($value);
		foreach ($t_arr["StundenBelegung"] as &$value) {
			$value["Belegt"] += $stunden_arr[$j]["Belegt"];
			$j++;
		}
		$belegung_pro_tag_pro_woche[$woche_tag2-1] = $t_arr;	
	}
}
// Belegung pro Tag pro Woche berechnen
if ($anzahl_wochen > 0) {
	unset($value);
	foreach ($belegung_pro_tag_pro_woche as &$value) {
		unset($value2);
		foreach ($value["StundenBelegung"] as &$value2) {
			$value2["Belegt"] /= $anzahl_wochen;
		}
	}
}

$werte_array["datum_begin"] = date('l, d. F Y' ,strtotime($date_begin));
$werte_array["datum_ende"] = date('l, d. F Y' ,strtotime($date_ende));
$werte_array["belegt_gesamt"] = $belegt_gesamt / $gewertete_tage;
$werte_array["belegung_absolut_pro_tag"] = $belegung_absolut_pro_tag;	
$werte_array["belegung_pro_tag_pro_stunde"] = $belegung_pro_tag_pro_stunde;	
$werte_array["belegung_absolut_pro_woche"] = $belegung_absolut_pro_woche;
$werte_array["belegung_pro_tag_pro_woche"] = $belegung_pro_tag_pro_woche;
$werte_array["belegung_absolut_pro_monat"] = $belegung_absolut_pro_monat;

?>