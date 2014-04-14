<?php

// Datei öffnen
$datei = file("belegung.csv");
// Auslesen
foreach ($datei AS $ausgabe) {
	$zerlegen = explode(";", $ausgabe);
	// 1. Zeile (Header) überspringen
	if ($zerlegen[0] == "time_update")
		continue;
	//myLog("$zerlegen[0];$zerlegen[1];$zerlegen[2];$zerlegen[3];$zerlegen[4];$zerlegen[5];$zerlegen[6];$zerlegen[7];$zerlegen[8];$zerlegen[9]");
	// BelegungsID ermitteln
	$belegung_id = getBelegungID();
	if ($belegung_id == -1)
		continue;
	// Buchungsdatum ermitteln
	$buchung_am = getBuchungAm($zerlegen[0]);
	if ($buchung_am == -1)
		continue;
	// gebuchten Tag ermitteln
	$buchung_fuer = getBuchungFuer($zerlegen[4], $zerlegen[5], $zerlegen[6]);
	if ($buchung_fuer == -1)
		continue;	
	// Startzeit ermitteln
	$start = getStartZeit($zerlegen[1]);
	if ($start == -1)
		continue;
	// Endezeit ermitteln
	$ende = getEndeZeit($zerlegen[2]);
	if ($ende == -1)
		continue;
	// Buchung hinzufügen
	if (addBuchung($belegung_id, $zerlegen[9], $buchung_am, $buchung_fuer, $start, $ende) == false)
		break;
}

// globale Funktionen
function getBelegungID() {
	myLog("Hole nächste BelegungID");
	$ergebnis = mysql_query("SELECT max(BelegungID) as maximum FROM belegung");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$belegung_id = ($row->maximum) + 1;
		myLog("Erhalte BelegungID: $belegung_id");
		return $belegung_id;
	}	
	return 1;
}

function getBuchungAm($datum_unformatiert) {
	myLog("Ermittle Buchungsdatum aus Vorgabe: $datum_unformatiert");
	if (strlen($datum_unformatiert) < 10) {
		myError("Ungültiges Buchgungsdatum: $datum_unformatiert - Länge: " . strlen($datum_unformatiert));
		return -1;
	}	
	$datum_formatiert = substr($datum_unformatiert, 6, 4) . "-" . substr($datum_unformatiert, 3, 2) . "-" . substr($datum_unformatiert, 0, 2);
	myLog("Buchungsdatum: $datum_formatiert");
	return $datum_formatiert;
}

function getBuchungFuer($tag, $woche, $jahr) {
	myLog("Ermittle Buchungstag aus Vorgabe (Tag in der Woche-Woche im Jahr-Jahr): $tag-$woche-$jahr");
	/*if (empty($tag) || empty($woche) || empty($jahr)) {
		myError("Fehlende Angaben");
		return -1;
	}*/
	$datum_formatiert = week_start_date($woche, $jahr, $tag + 1, "Y-m-d");		
	myLog("Buchungstag: $datum_formatiert");
	return $datum_formatiert;
}

// hier gefunden: http://stackoverflow.com/questions/1897727/get-first-day-of-week-in-php
function week_start_date($wk_num, $yr, $first = 1, $format = 'F d, Y') {
	$wk_ts  = strtotime('+' . $wk_num . ' weeks', strtotime($yr . '0101'));
	$mon_ts = strtotime('-' . date('w', $wk_ts) + $first . ' days', $wk_ts);
	return date($format, $mon_ts);
}

function getStartZeit($unformatierte_zeit) {
	return formatiereZeit($unformatierte_zeit);
}

function getEndeZeit($unformatierte_zeit) {
	return formatiereZeit($unformatierte_zeit);
}

function formatiereZeit($unformatierte_zeit) {
	myLog("Ermittle Zeit aus Vorgabe: $unformatierte_zeit");
	if (strlen($unformatierte_zeit) < 5) {
		myError("Ungültiges Zeitformat: $unformatierte_zeit");
		return -1;
	}	
	$zeit_formatiert = $unformatierte_zeit . ":00";
	myLog("Formatierte Zeit: $zeit_formatiert");
	return $zeit_formatiert;
}

function addBuchung($belegung_id, $raum_id, $buchung_am, $buchung_fuer, $beginn, $ende) {
	myLog("Lege Buchung an für Raum: $raum_id");
	$ergebnis = mysql_query("insert into belegung (BelegungID, RaumID, Buchung_am, Buchung_fuer, Beginn, Ende) values ($belegung_id, $raum_id, '$buchung_am', '$buchung_fuer', '$beginn', '$ende')");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return false;
	}
	return true;
}

?>