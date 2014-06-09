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
	if ($diagramm1 == "true") {
		$diagramm1 = true;
	} else { 
		$diagramm1 = false;
	}
	$diagramm2 = $_POST["Diagramm2"];
	if ($diagramm2 == "true") {
		$diagramm2 = true;
	} else { 
		$diagramm2 = false;
	}
	$diagramm3 = $_POST["Diagramm3"];
	if ($diagramm3 == "true") {
		$diagramm3 = true;
	} else { 
		$diagramm3 = false;
	}
	$diagramm4 = $_POST["Diagramm4"];
	if ($diagramm4 == "true") {
		$diagramm4 = true;
	} else { 
		$diagramm4 = false;
	}
	$diagramm5 = $_POST["Diagramm5"];
	if ($diagramm5 == "true") {
		$diagramm5 = true;
	} else { 
		$diagramm5 = false;
	}
} else {	 
	//debugg
	$zeitraum = 5;
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
	$diagramm5 = "true";
}
// Parameter für Darstellung zurück ins Array schreiben
$werte_array["raumnr"] = $raumnr;
$werte_array["zeitraum"] = $zeitraum;
$werte_array["diagramm1"] = $diagramm1;
$werte_array["diagramm2"] = $diagramm2;
$werte_array["diagramm3"] = $diagramm3;
$werte_array["diagramm4"] = $diagramm4;
$werte_array["diagramm5"] = $diagramm5;
$werte_array["mitSamstag"] = $mitSamstag;
$werte_array["mitSonntag"] = $mitSonntag;
$werte_array["tag"] = $tag;
$werte_array["monat"] = $monat;
$werte_array["jahr"] = $jahr;
// Auswertung starten
include("auswertung1Raum.php");
// Übergabearray in JSON ausgeben
print_r(json_encode($werte_array));
// Datenbankverbindung trennen	
include("dbdisconnect.php");  
?>