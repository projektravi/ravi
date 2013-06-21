<?php
//include("dbconnect.php");
$mysqli = new mysqli("localhost", "root", "", "ravi");
$query = mysqli_prepare($mysqli ,"INSERT INTO belegung VALUES (?, ?, ?, ?, ?)");
$start = microtime(true);

$param1 = 1;
$param2 = 2;
$param3 = "2013-01-01";
$param4 = "08:00:00";
$param5 = "10:00:00";

for($count = 1; $count < 100000; $count++) {
    mysqli_stmt_bind_param($query,'iisss',$param1,$param2,$param3,$param4,$param5);
    mysqli_stmt_execute($query);
}

$end = microtime(true);
 
$laufzeit = $end - $start;
echo "Laufzeit: ".$laufzeit." Sekunden!";

$query->close();
$mysqli->close();
//include("dbdisconnect.php");
?>
