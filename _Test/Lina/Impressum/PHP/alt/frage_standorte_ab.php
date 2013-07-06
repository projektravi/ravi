<?php
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