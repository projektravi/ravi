<?php
include("dbconnect.php");

$id = $_POST["GebaeudeID"];

$ergebnis = mysql_query("SELECT RaumID, Raumnr FROM raum WHERE GebäudeID = " . $id);
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}
$arr = array();
while($row = mysql_fetch_object($ergebnis)) {
	$t_arr = array();
	$t_arr["RaumID"] = $row->RaumID;	
	$t_arr["Raumnr"] = utf8_encode($row->Raumnr);	
	$arr[] = $t_arr;
}

print_r(json_encode($arr));
 
include("dbdisconnect.php");  
?>