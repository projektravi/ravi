<?php
include("dbconnect.php");

// Zeitraum auswählen
$zeitraum = $_POST["Zeitraum"];

if ($zeitraum == 2) // Auswertung für 7 Tage
	include("auswertung1Raum7Tage.php");
 
include("dbdisconnect.php");  
?>