<?php
include("dbconnect.php");

// Übergebene Daten zwischenspeichern
$raumid = $_POST["RaumID"];
$tag = $_POST["Tag"];
$monat = $_POST["Monat"];
$jahr = $_POST["Jahr"];
// An benötigtes Format anpassen
if (strlen($tag) == 1)
	$tag = "0".$tag;
if (strlen($monat) == 1)
	$monat = "0".$monat;
// Datum in SQL-Notation
$date_begin = $jahr."-".$monat."-".$tag;
// 6 Tage dazu addieren ergibt 7 Tage insgesamt
$date_ende = date('Y-m-d', strtotime('+6 days', strtotime($date_begin)));
$ergebnis = mysql_query("SELECT Buchung_fuer, TIME_TO_SEC(TIMEDIFF(Ende,Beginn)) as DauerInSek 
							FROM belegung 
							WHERE RaumID = ".$raumid." AND Buchung_fuer BETWEEN '".$date_begin."' AND '".$date_ende."' ORDER BY Buchung_fuer");
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
} 
$arr = array();
$t_arr = array();
$buchung_fuer = "";
$dauer_in_sek = 0;
$next_day = $date_begin;
while ($row = mysql_fetch_object($ergebnis)) {
	// Datum initialisieren
	if ($buchung_fuer == "")
		$buchung_fuer = $row->Buchung_fuer;
	// Datensätze für nächsten Tag
	if ($buchung_fuer != $row->Buchung_fuer) {
		// Datensatz für nächsten Tag vorhanden? Falls nein, Datensatz mit 0% Belegung anlegen
		while ($next_day != $buchung_fuer) {
			$t_arr = array();
			$t_arr["Buchung_fuer"] = $next_day;	
			$t_arr["ProzBelegung"] = 0;
			$arr[] = $t_arr;
			$next_day = date('Y-m-d', strtotime('+1 days', strtotime($next_day)));
		}		
		// Datum in Array füllen
		$t_arr["Buchung_fuer"] = $buchung_fuer;	
		// Dauer berechnen: Umwandeln in Minuten, dann von 12 h (720 min) ausgehen, zu wieviel Prozent der Raum belegt ist
		$dauer_in_min = $dauer_in_sek/60;
		$proz_belegung = (100*$dauer_in_min)/720;
		// Prozentuale Belegung in Array füllen
		$t_arr["ProzBelegung"] = $proz_belegung;	
		// Datensatz für den Tag hinzufügen
		$arr[] = $t_arr;
		// Vorbereitung für nächsten Datensatz
		$t_arr = array();
		$buchung_fuer = $row->Buchung_fuer;
		$dauer_in_sek = 0;
		$next_day = date('Y-m-d', strtotime('+1 days', strtotime($next_day)));
	}	
	// Belegungen Sekundenweise addieren
	$dauer_in_sek += $row->DauerInSek;	
}
// letzte gesammelten Daten eintragen
if ($dauer_in_sek != 0) {
	// Datum in Array füllen
	$t_arr["Buchung_fuer"] = $buchung_fuer;	
	// Dauer berechnen: Umwandeln in Minuten, dann von 12 h (720 min) ausgehen, zu wieviel Prozent der Raum belegt ist
	$dauer_in_min = $dauer_in_sek/60;
	$proz_belegung = (100*$dauer_in_min)/720;
	// Prozentuale Belegung in Array füllen
	$t_arr["ProzBelegung"] = $proz_belegung;	
	// Datensatz für den Tag hinzufügen
	$arr[] = $t_arr;
	$next_day = date('Y-m-d', strtotime('+1 days', strtotime($next_day)));
}
// Datensätze auffüllen
while (strtotime($next_day) <= strtotime($date_ende)) {
	$t_arr = array();
	$t_arr["Buchung_fuer"] = $next_day;	
	$t_arr["ProzBelegung"] = 0;
	$arr[] = $t_arr;
	$next_day = date('Y-m-d', strtotime('+1 days', strtotime($next_day)));
}

print_r(json_encode($arr));
 
include("dbdisconnect.php");  
?>