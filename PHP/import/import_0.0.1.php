<?php
// DB-Verbindung aufbauen
include("..\dbconnect.php");
// globale Variablen

// ------------------ Räume importieren ----------------
// Datei öffnen
$datei = file("raeume.csv");
// Auslesen
foreach ($datei AS $ausgabe) {
	$zerlegen = explode(";", $ausgabe);
	// 1. Zeile (Header) überspringen
	if ($zerlegen[0] == "raum_id")
		continue;
	//myLog("$zerlegen[0];$zerlegen[1];$zerlegen[2];$zerlegen[3];$zerlegen[4];$zerlegen[5];$zerlegen[6];$zerlegen[7];$zerlegen[8]");
	// Standort hinzufügen
	$standort_id = addStandort($zerlegen[7]);
	if ($standort_id == -1)
		break;
	// Gebäude hinzufügen
	$gebaeude_id = addGebaeude($zerlegen[6], $standort_id);
	if ($gebaeude_id == -1)
		break;
	// Raum hinzufügen
	$raum_id = addRaum($zerlegen[0], $zerlegen[1], $zerlegen[2], $zerlegen[4], $gebaeude_id);
	if ($raum_id == -1)
		break;
	// Eigenschaft setzen
	if (setEigenschaft($raum_id, $zerlegen[3]) == false)
		break;
}

// DB-Verbindung beenden
include("..\dbdisconnect.php");  

// globale Funktionen
function addStandort($standort_name)
{
	myLog("Prüfe Standort: $standort_name");
	$ergebnis = mysql_query("SELECT StandortID FROM standort WHERE Bezeichnung = '$standort_name'");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$standort_id = $row->StandortID;
		myLog("Erhalte StandortID: $standort_id");
		return $standort_id;
	}
	myLog("Standort nicht vorhanden - füge hinzu.");
	$standort_id = 1;
	$ergebnis = mysql_query("SELECT max(StandortID) as maximum FROM standort");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$standort_id = ($row->maximum) + 1;		
	}
	myLog("Neue StandortID: $standort_id");
	$ergebnis = mysql_query("insert into standort (StandortID, Bezeichnung) values ($standort_id, '$standort_name')");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}
	return $standort_id;
}

function addGebaeude($gebaude_name, $standort_id)
{
	myLog("Prüfe Gebäude: $gebaude_name");
	$ergebnis = mysql_query("SELECT GebaeudeID FROM gebaeude WHERE Bezeichnung = '$gebaude_name'");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$gebaeude_id = $row->GebaeudeID;
		myLog("Erhalte GebaeudeID: $gebaeude_id");
		return $gebaeude_id;
	}
	myLog("Gebäude nicht vorhanden - füge hinzu.");
	$gebaeude_id = 1;
	$ergebnis = mysql_query("SELECT max(GebaeudeID) as maximum FROM gebaeude");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$gebaeude_id = ($row->maximum) + 1;		
	}
	myLog("Neue GebaeudeID: $gebaeude_id");
	$ergebnis = mysql_query("insert into gebaeude (GebaeudeID, StandortID, Bezeichnung) values ($gebaeude_id, $standort_id, '$gebaude_name')");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}
	return $gebaeude_id;
}

function addRaum($raum_id, $raum_nr, $raum_sitzplaetze, $raum_typ, $gebaeude_id)
{
	myLog("Prüfe Raum: $raum_nr (ID: $raum_id)");
	$ergebnis = mysql_query("SELECT RaumID FROM raum WHERE RaumID = $raum_id");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}	
	while($row = mysql_fetch_object($ergebnis))	{
		$raum_id = $row->RaumID;
		myLog("Erhalte RaumID: $raum_id");
		return $raum_id;
	}
	myLog("Raum nicht vorhanden - füge hinzu.");
	$ergebnis = mysql_query("insert into raum (RaumID, GebaeudeID, Raumnr, Sitzplaetze, Raumtyp) values ($raum_id, $gebaeude_id, '$raum_nr', $raum_sitzplaetze, '$raum_typ')");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return -1;
	}
	return $raum_id;
}

function setEigenschaft($raum_id, $eigenschaft)
{
	$spalte;
	if ($eigenschaft == "Beamer")
		$spalte = "Beamer";
	else if ($eigenschaft == "OH-Projektor")
		$spalte = "OH-Projektor";
	else if ($eigenschaft == "Smart-Board")
		$spalte = "Smartboard";
	else
		return true;	
	myLog("Setze Eigenschaft '$eigenschaft' von Raum mit der ID '$raum_id'");
	$ergebnis = mysql_query("update raum set `$spalte` = 1 where RaumID = $raum_id");
	if (!$ergebnis) {
		myError("Konnte Abfrage nicht ausführen: " . mysql_error());
		return false;
	}
	return true;
}

function myLog($log)
{
	$isLog = true;
	if ($isLog)
		echo "$log<br>";
}

function myError($error)
{
	echo "Fehler!!! $error)";
}
?>