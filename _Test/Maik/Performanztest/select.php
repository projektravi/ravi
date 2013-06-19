<?php
include("dbconnect.php");
$start = microtime(true);
$result = mysql_query("SELECT count(*) FROM belegung");

if (!$result) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}

$row = mysql_fetch_row($result);

echo "anzahl an ds: ", $row[0];

$end = microtime(true); 
$laufzeit = $end - $start;
echo "Laufzeit: ".$laufzeit." Sekunden!<br>";
//
$start = microtime(true);
$ergebnis = mysql_query("SELECT KursID FROM belegung");
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}
$anz = 0;
while($row = mysql_fetch_object($ergebnis))
{
  $anz = $anz + $row->KursID;
}
echo "anzahl an ds: ", $anz;

$end = microtime(true); 
$laufzeit = $end - $start;
echo "Laufzeit: ".$laufzeit." Sekunden!<br>";
//
$start = microtime(true);
$ergebnis = mysql_query("SELECT KursID FROM belegung LIMIT 100000,100000");
if (!$ergebnis) {
    echo 'Konnte Abfrage nicht ausführen: ' . mysql_error();
    exit;
}
$anz = 0;
while($row = mysql_fetch_object($ergebnis))
{
  $anz = $anz + $row->KursID;
}
echo "anzahl an ds: ", $anz;

$end = microtime(true); 
$laufzeit = $end - $start;
echo "Laufzeit: ".$laufzeit." Sekunden!<br>";

include("dbdisconnect.php");
?>