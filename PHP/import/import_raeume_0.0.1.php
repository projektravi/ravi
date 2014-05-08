<?php

// Datei öffnen
$datei = file("raeume.csv");
// Auslesen
foreach ($datei AS $ausgabe) {
	$zerlegen = explode(";", $ausgabe);
	// 1. Zeile (Header) überspringen
	if ($zerlegen[0] == "raum_id")
		continue;
	//myLog("$zerlegen[0];$zerlegen[1];$zerlegen[2];$zerlegen[3];$zerlegen[4];$zerlegen[5];$zerlegen[6];$zerlegen[7];$zerlegen[8]");
	// Standort manipulieren
	$standort_name = manipuliereStandort($zerlegen[7]);
	if ($standort_name == "")
		continue;
	// Standort hinzufügen
	$standort_id = addStandort($standort_name);
	if ($standort_id == -1)
		break;
	// Gebäudevorauswahl
	if (gebaeudePreChecker($zerlegen[6]) == false)
		continue;
	// Gebäude hinzufügen
	$gebaeude_id = addGebaeude($zerlegen[6], $standort_id);
	if ($gebaeude_id == -1)
		break;
	// Raum manipulieren
	$raum_name = manipuliereRaum($zerlegen[6], $zerlegen[1]);
	if ($raum_name == "")
		continue;
	// Raum hinzufügen
	$raum_id = addRaum($zerlegen[0], $raum_name, $zerlegen[2], $zerlegen[4], $gebaeude_id);
	if ($raum_id == -1)
		break;
	// Eigenschaft setzen
	if (setEigenschaft($raum_id, $zerlegen[3]) == false)
		break;
}

// globale Funktionen
function manipuliereStandort($standort_name) {
	myLog("Manipuliere Standort: $standort_name");
	if ($standort_name == "Campus der FHVR")
		$standort_name = "Campus Lichtenberg";
	if ($standort_name != "Campus Lichtenberg")
		$standort_name = "";
	myLog("Manipulierter Standort: $standort_name");	
	return $standort_name;
}

function addStandort($standort_name) {
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

function gebaeudePreChecker($gebaeude_name) {
	myLog("Prüfe Gebäude: $gebaeude_name");
	if ($gebaeude_name == "Haus 6B")
		return true;
	if ($gebaeude_name == "Haus 6A")
		return true;
	if ($gebaeude_name == "Haus 1")
		return true;
	myLog("Gebäude aussortiert.");
	return false;
}

function addGebaeude($gebaude_name, $standort_id) {
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

function manipuliereRaum($gebaeude_name, $raum_name) {
	myLog("Prüfe Raum $raum_name von Gebäude $gebaeude_name");
	if ($gebaeude_name == "Haus 6B")
		return manipuliereRaumHaus6B($raum_name);
	if ($gebaeude_name == "Haus 6A")
		return manipuliereRaumHaus6A($raum_name);
	if ($gebaeude_name == "Haus 1")
		return manipuliereRaumHaus1($raum_name);
	myLog("Gebäude unbekannt.");
	return "";
}

function manipuliereRaumHaus6B($raum_name) {
	myLog("Manipuliere Raum: $raum_name");
	if (strlen($raum_name) < 6) {
		myError("Raumname zu kurz");
		return "";
	}
	if (($raum_name == "6B 251/252") || ($raum_name == "6B 277/278  +V") || ($raum_name == "6B 251/252") || ($raum_name == "6B kein Raum") || ($raum_name == "6B kein Raum mit Beamer") || ($raum_name == "Z 6B 350 a")) {
		myError("Raum nicht zuordbar");
		return "";
	}
	if (substr($raum_name,0,1) == "Z") {
		myLog("Entferne Anfangsbuchstabe");
		$raum_name = substr($raum_name,2);
	}
	$raum_name = substr($raum_name,0,6);
	myLog("Manipulierter Raum: $raum_name");
	return $raum_name;
}

function manipuliereRaumHaus6A($raum_name) {
	myLog("Manipuliere Raum: $raum_name");
	if (strlen($raum_name) < 6) {
		myError("Raumname zu kurz");
		return "";
	}
	$raum_name = substr($raum_name,0,6);
	myLog("Manipulierter Raum: $raum_name");
	return $raum_name;
}

function manipuliereRaumHaus1($raum_name) {
	myLog("Manipuliere Raum: $raum_name");	
	myLog("Entferne alle Punkte und setze Punkt an 2. Stelle");
	$raum_name = str_replace(".", "", $raum_name);
	$raum_name = substr($raum_name,0,6);
	$raum_name = substr($raum_name,0,1).'.'.substr($raum_name,1);
	myLog("Manipulierter Raum: $raum_name");
	if (($raum_name != "1.2065") && ($raum_name != "1.2066") && ($raum_name != "1.2067") && ($raum_name != "1.2068")) {
		myError("Raum nicht verwendbar");
		return "";
	}
	return $raum_name;
}

function addRaum($raum_id, $raum_nr, $raum_sitzplaetze, $raum_typ, $gebaeude_id) {
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

function setEigenschaft($raum_id, $eigenschaft) {
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

?>