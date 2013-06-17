<?php
 
// Achtung Sicherheitsrisiko!!! man sollte Input-Werte immer validieren!!!! (wird in diesem Beispiel nicht getan)
// Daten empfangen
/*$id = $_POST["id"];
 
$name= $_POST["name"];
 
// Inhalt in eine Datei schreiben
$datei_handle=fopen("log.txt",a); 
fwrite($datei_handle, "ID: ".$id."\n"); 
fwrite($datei_handle, "Name: ".$name."\n"); 
fclose($datei_handle);*/

include("dbconnect.php");

$ergebnis = mysql_query("SELECT StandortID, Bezeichnung FROM standort");
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}
while($row = mysql_fetch_object($ergebnis)) {
	$t_arr = array();
	$t_arr["StandortID"] = $row->StandortID;	
	$t_arr["Bezeichnung"] = utf8_encode($row->Bezeichnung);	
	$arr[] = $t_arr;
}

print_r(json_encode($arr));
 
include("dbdisconnect.php");  
?>