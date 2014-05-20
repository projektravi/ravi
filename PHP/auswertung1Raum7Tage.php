<?php
	
// Parameter auslesen
$raumid = $_POST["RaumID"];
$tag = $_POST["Tag"];
$monat = $_POST["Monat"];
$jahr = $_POST["Jahr"];
$raumnr = $_POST["RaumNr"];
$mitSamstag = $_POST["Samstag"];
if ($mitSamstag == "true") {
	$mitSamstag = true;
} else { 
	$mitSamstag = false;
}
$mitSonntag = $_POST["Sonntag"];
if ($mitSonntag == "true") {
	$mitSonntag = true;
} else { 
	$mitSonntag = false;
}
// Zeitraum definieren
if ($zeitraum == 1) {
	$anz_tage = 1;
	$ende_datum_parameter = "+0 days";
	$mitSamstag = true;
	$mitSonntag = true;
} else if ($zeitraum == 2) {
	$anz_tage = 7;
	$ende_datum_parameter = "+6 days";
}
/*
$raumid = "330213240291424";//$_POST["RaumID"];
$tag = 3;//$_POST["Tag"];
$monat = 1;//$_POST["Monat"];
$jahr = 2011;//$_POST["Jahr"];
$raumnr = "XYZ";//$_POST["RaumNr"];
$mitSamstag = "true";//$_POST["Samstag"];
if ($mitSamstag == "true") {
	$mitSamstag = true;
} else { 
	$mitSamstag = false;
}
$mitSonntag = "false";//$_POST["Sonntag"];
if ($mitSonntag == "true") {
	$mitSonntag = true;
} else { 
	$mitSonntag = false;
}
*/
// An benötigtes Format anpassen
if (strlen($tag) == 1)
	$tag = "0".$tag;
if (strlen($monat) == 1)
	$monat = "0".$monat;
// Datum in SQL-Notation
$date_begin = $jahr."-".$monat."-".$tag;
// 6 Tage dazu addieren ergibt 7 Tage insgesamt
$date_ende = date('Y-m-d', strtotime($ende_datum_parameter, strtotime($date_begin)));
// 0. Tag festlegen 
$aktueller_tag = date('Y-m-d', strtotime('-1 days', strtotime($date_begin)));
// Variablen initialisieren
$belegung_absolut_pro_tag = array();
$belegung_pro_tag_pro_stunde = array();
$belegt_gesamt = 0;
$stunden_zaehler = 8;
$i = 1;
$gewertete_tage = 0;
// Schleifendurchlauf für den Zeitraum, pro Tag eine Schleife
for ($i = 1; $i <= $anz_tage; $i++) {
	// Daten für aktuellen Tag festlegen
	$aktueller_tag = date('Y-m-d', strtotime('+1 days', strtotime($aktueller_tag)));
	// Prüfung auf Samstag
	if (date('N', strtotime($aktueller_tag)) == 6 && $mitSamstag == false) {
		continue;
	}
	// Prüfung auf Sonntag
	if (date('N', strtotime($aktueller_tag)) == 7 && $mitSonntag == false) {
		continue;
	}
	$gewertete_tage++;
	// Daten für den aktuellen Tag sammeln
	$abfrage = "SELECT Buchung_fuer, Beginn, Ende 
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
	$belegt_in_dieser_stunde = 0;
	$stunden_zaehler = 8;
	while ($row = mysql_fetch_object($ergebnis)) {
		$begin = $row->Beginn;
		$ende = $row->Ende;
		// Belegung absolut
		$belegung_in_h += $ende - $begin;
		// Belegung in Stunden
		while ($stunden_zaehler <= $ende && $stunden_zaehler <= 20) {
			$belegt_in_dieser_stunde = 0;	
			if ($stunden_zaehler >= $begin && $stunden_zaehler <= $ende) {
				$belegt_in_dieser_stunde = 1;
			}
			$t_arr = array();
			$t_arr["Stunde"] = $stunden_zaehler;
			$t_arr["Belegt"] = $belegt_in_dieser_stunde;	
			$stunden_arr[] = $t_arr;
			$stunden_zaehler++;
		}		
	}
	if ($belegung_in_h > 12) {
		$belegung_in_h = 12;
	}
	$gesamt_belegung_in_h = ($belegung_in_h * 100) / 12;
	$belegt_gesamt += $gesamt_belegung_in_h;
	// Daten verpacken für absolute Belegung pro Tag
	$t_arr = array();
	$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
	$t_arr["ProzBelegung"] = $gesamt_belegung_in_h;
	// Daten für absolute Belegung pro Tag in Gesamtarray verpacken
	$belegung_absolut_pro_tag[] = $t_arr;	
	// Daten verpacken für Belegung pro Tag und pro Stunde
	if ($stunden_zaehler < 20) {
		while ($stunden_zaehler <= 20) {			
			$t_arr = array();
			$t_arr["Stunde"] = $stunden_zaehler;
			$t_arr["Belegt"] = 0;	
			$stunden_arr[] = $t_arr;
			$stunden_zaehler++;
		}		
	}
	$t_arr = array();
	$t_arr["Buchung_fuer"] = date('l, d. F Y' ,strtotime($aktueller_tag));	
	$t_arr["StundenBelegung"] = $stunden_arr;
	$belegung_pro_tag_pro_stunde[] = $t_arr;
}

$werte_array = array();
$werte_array["raumnr"] = $raumnr;
$werte_array["zeitraum"] = $zeitraum;
$werte_array["datum_begin"] = date('l, d. F Y' ,strtotime($date_begin));
$werte_array["datum_ende"] = date('l, d. F Y' ,strtotime($date_ende));
$werte_array["belegt_gesamt"] = $belegt_gesamt / $gewertete_tage;
$werte_array["belegung_absolut_pro_tag"] = $belegung_absolut_pro_tag;	
$werte_array["belegung_pro_tag_pro_stunde"] = $belegung_pro_tag_pro_stunde;	

print_r(json_encode($werte_array));

?>