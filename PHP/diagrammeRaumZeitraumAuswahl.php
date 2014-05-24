<?php
// Datenbankverbindung aufgbauen
include("dbconnect.php");
// Übergabearray initialisieren
$werte_array = array();
// Parameter auslesen
if (true) {
	$zeitraum = $_POST["Zeitraum"];
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
	$diagramm1 = $_POST["Diagramm1"];
	$diagramm2 = $_POST["Diagramm2"];
	$diagramm3 = $_POST["Diagramm3"];
	$diagramm4 = $_POST["Diagramm4"];
} else {	 
	//debugg
	$zeitraum = 2;
	$raumid = "325604513970052";
	$tag = 1;
	$monat = 1;
	$jahr = 2011;
	$raumnr = "XYZ";
	$mitSamstag = "true";
	if ($mitSamstag == "true") {
		$mitSamstag = true;
	} else { 
		$mitSamstag = false;
	}
	$mitSonntag = "false";
	if ($mitSonntag == "true") {
		$mitSonntag = true;
	} else { 
		$mitSonntag = false;
	}
	$diagramm1 = "true";
	$diagramm2 = "true";
	$diagramm3 = "true";
	$diagramm4 = "true";
}
// Parameter für Darstellung zurück ins Array schreiben
$werte_array["raumnr"] = $raumnr;
$werte_array["zeitraum"] = $zeitraum;
$werte_array["diagramm1"] = $diagramm1;
$werte_array["diagramm2"] = $diagramm2;
$werte_array["diagramm3"] = $diagramm3;
$werte_array["diagramm4"] = $diagramm4;
$werte_array["mitSamstag"] = $mitSamstag;
$werte_array["mitSonntag"] = $mitSonntag;
// Auswertung starten
include("auswertung1Raum.php");
// Übergabearray in JSON ausgeben
print_r(json_encode($werte_array));
// Datenbankverbindung trennen	
include("dbdisconnect.php");  
?>