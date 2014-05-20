<?php
include("dbconnect.php");

// Zeitraum auswählen
$zeitraum = $_POST["Zeitraum"];
if ($zeitraum == 1) 
	include("auswertung1Raum7Tage.php");	
else if ($zeitraum == 2) 
	include("auswertung1Raum7Tage.php");	
 
include("dbdisconnect.php");  
?>