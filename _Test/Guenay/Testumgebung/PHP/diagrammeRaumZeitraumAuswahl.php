<?php
include("dbconnect.php");

$id = 1;
$date_begin = "2012-11-01";
$date_ende = "2012-11-30";

		
$ergebnis = mysql_query("SELECT WEEK(`Buchung_fuer`,7) as KW,
							DATE_FORMAT(`Buchung_fuer`,GET_FORMAT(DATE,\'EUR\'))as Datum, 
							DAYNAME(`Buchung_fuer`) as Wochentag,
							CAST((SUM(TIME_TO_SEC(`Ende`) - TIME_TO_SEC(`Beginn`))*100)/216000 AS DECIMAL(5,2)) as ProzBelegung 
							FROM `belegung` WHERE  RaumID = ".$id." AND `Buchung_fuer` Between '".$date_begin."' AND '".$date_ende."' 
							GROUP BY KW ORDER BY `Buchung_fuer`");
							
							
							
							
							
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}

print_r(json_encode($arr));
 
include("dbdisconnect.php");  
?>