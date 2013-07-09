<?php
include("dbconnect.php");

$id = $_POST["StandortID"];

$ergebnis = mysql_query("SELECT GebäueID, Bezeichnung FROM gebäude WHERE StandortID = " . $id);
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}
$arr = array();
while($row = mysql_fetch_object($ergebnis)) {
	$t_arr = array();
	$t_arr["GebaeudeID"] = $row->GebäudeID;	
	$t_arr["Bezeichnung"] = utf8_encode($row->Bezeichnung);	
	$arr[] = $t_arr;
}

print_r(json_encode($arr));
 
include("dbdisconnect.php");  
?>