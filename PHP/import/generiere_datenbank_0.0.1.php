<?php

// DB Anlegen
echo "Lege DB an ..";
$ergebnis = mysql_query("CREATE DATABASE `ravi` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
echo ". erfolgreich!<br>";
// DB auswählen
mysql_select_db("ravi") or die ("Die Datenbank existiert nicht.");
// Tabelle Belegung anlegen
echo "Lege Tabellen an ..";
$ergebnis = mysql_query("CREATE TABLE IF NOT EXISTS `belegung` (
  `BelegungID` int(11) NOT NULL AUTO_INCREMENT,
  `KursID` int(11) DEFAULT NULL,
  `RaumID` bigint(15) NOT NULL,
  `Buchung_am` date NOT NULL,
  `Buchung_fuer` date NOT NULL,
  `Beginn` time NOT NULL,
  `Ende` time NOT NULL,
  PRIMARY KEY (`BelegungID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
// Tabelle Gebaeude anlegen
$ergebnis = mysql_query("CREATE TABLE IF NOT EXISTS `gebaeude` (
  `GebaeudeID` int(11) NOT NULL,
  `StandortID` int(11) NOT NULL,
  `Bezeichnung` varchar(255) NOT NULL,
  `Stockwerke` int(11) DEFAULT NULL,
  `Barrierefreiheit` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`GebaeudeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
// Tabelle Kurs anlegen
$ergebnis = mysql_query("CREATE TABLE IF NOT EXISTS `kurs` (
  `KursID` int(11) NOT NULL AUTO_INCREMENT,
  `Kursbezeichnung` varchar(255) NOT NULL,
  `Dozent` varchar(100) NOT NULL,
  `Studiengang` varchar(100) NOT NULL,
  `Teilnehmerzahl` int(11) NOT NULL,
  `Fachbereich` int(11) NOT NULL,
  `IT-ler` tinyint(1) NOT NULL,
  PRIMARY KEY (`KursID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
// Tabelle Raum anlegen
$ergebnis = mysql_query("CREATE TABLE IF NOT EXISTS `raum` (
  `RaumID` bigint(15) NOT NULL AUTO_INCREMENT,
  `GebaeudeID` int(11) NOT NULL,
  `Raumnr` varchar(100) NOT NULL,
  `Sitzplaetze` int(11) NOT NULL,
  `Smartboard` tinyint(1) NOT NULL DEFAULT '0',
  `Whiteboard` tinyint(1) NOT NULL DEFAULT '0',
  `Tafel` tinyint(1) NOT NULL DEFAULT '0',
  `Flipchart` tinyint(1) NOT NULL DEFAULT '0',
  `OH-Projektor` tinyint(1) NOT NULL DEFAULT '0',
  `Beamer` tinyint(1) NOT NULL DEFAULT '0',
  `Raumtyp` varchar(100) NOT NULL,
  `PC-Plaetze` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`RaumID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
// Tabelle Standort anlegen
$ergebnis = mysql_query("CREATE TABLE IF NOT EXISTS `standort` (
  `StandortID` int(11) NOT NULL AUTO_INCREMENT,
  `Bezeichnung` varchar(255) NOT NULL,
  `Strasse` varchar(100) DEFAULT NULL,
  `PLZ` char(5) DEFAULT NULL,
  `Ort` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`StandortID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12");
if (!$ergebnis) {
	myError("Konnte Abfrage nicht ausführen: " . mysql_error());
	return false;
}
echo ". erfolgreich!<br>";

?>