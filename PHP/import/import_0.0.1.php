<?php

// DB-Verbindung aufbauen
include("..\dbconnect.php");

// Räume importieren
include("import_raeume_0.0.1.php");

// Belegung importieren
include("import_belegung_0.0.1.php");

// DB-Verbindung beenden
include("..\dbdisconnect.php");  

// globale Funktionen
function myLog($log) {
	$isLog = true;
	if ($isLog)
		echo "$log<br>";
}

function myError($error) {
	echo "<font size = +5 color = 'red'>Fehler:<br>$error</font><br>";
}

?>