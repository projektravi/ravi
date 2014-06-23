<?php

echo "Starte Import.<br><br>";
// DB-Verbindung aufbauen
mysql_connect("localhost", "root","") or die ("Keine Verbindung moeglich");

// Datenbank anlegen
include("generiere_datenbank_0.0.1.php");

// Räume importieren
include("import_raeume_0.0.1.php");

// Belegung importieren
include("import_belegung_0.0.1.php");

// DB-Verbindung beenden
include("..\dbdisconnect.php");  

echo "<br>Import erfolgreich beendet!";

// globale Funktionen
function myLog($log) {
	$isLog = false;
	if ($isLog)
		echo "$log<br>";
}

function myError($error) {
	echo "<font size = +5 color = 'red'>Fehler:<br>$error</font><br>";
}

?>