<?
$row = 1;
$anzahlraume = 0;
// Hilfsfunktion
function convertToWindowsCharset($string) {
	$charset =  mb_detect_encoding(
    $string,"UTF-8, ISO-8859-1, ISO-8859-15",true); 
    $string =  mb_convert_encoding($string, "Windows-1252", $charset);
    return $string;
}

if (($handle = fopen("raeume.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        $num = count($data); // ist hier immer neun
        //echo "<p> $num Felder in Zeile $row: <br /></p>\n";
        
        for ($c=0; $c < $anzahlraume; $c++) {
            if ($raum[$c][id] == $data[0]){
            	$vorhanden = True;
        		switch ($data[3]) {
    				case "Beamer":
        				$raum[$c][beamer]  = True;
        				break;
    				case "Doppeltische":
        				$raum[$c][doppeltische]  = True;
        				break;
    				case "Tafel":
        				$raum[$c][tafel]  = True;
        				break;
        			case "OH-Projektor":
        				$raum[$c][ohprojektor]  = True;
        				break;
        			case "PC-Arbeitsplätze":
        				$raum[$c][pcarbeitsplaetze]  = True;
        				break;
        			case "outlook":
        				$raum[$c][outlook]  = True;
        				break;
        			case "SPSS":
        				$raum[$c][spss]  = True;
        				break;
        			case "Einzeltische":
        				$raum[$c][einzeltische]  = True;
        				break;
        			case "DVD":
        				$raum[$c][dvd]  = True;
        				break;
        			case "Videoschrank":
        				$raum[$c][videoschrank]  = True;
        				break;
        			case "Dozenten PC ohne Netz":
        				$raum[$c][dozpcohnenetz]  = True;
        				break;
        			case "Smart-Board":
        				$raum[$c][smartboard]  = True;
        				break;
        			case "spezielle IT-Ausstattung":
        				$raum[$c][spezielleausstattung]  = True;
        				break;
        		}
			}
            else{
            	$vorhanden = FALSE;
            }
        } //for
        if (!$vorhanden){
        $raum[$anzahlraume][id]   = "$data[0]";
        $raum[$anzahlraume][raumnr]   = "$data[1]";
        $raum[$anzahlraume][sitzplaetze]   = "$data[2]";
        //$raum[$anzahlraume][equipment]   = "$data[3]";
        $raum[$anzahlraume][raumtyp]   = "$data[4]";
        $raum[$anzahlraume][barrierefrei]   = "$data[5]";
        $raum[$anzahlraume][gebaeude]   = "$data[6]";
        $raum[$anzahlraume][gelaende]   = "$data[7]";
        $raum[$anzahlraume][standort]   = "$data[8]";
        //$raum[$anzahlraume][equipment]   = "$data[3]";

        $raum[$anzahlraume][beamer]  = 0;
		$raum[$anzahlraume][doppeltische]  = 0;
        $raum[$anzahlraume][tafel]  = 0;
        $raum[$anzahlraume][ohprojektor]  = 0;
        $raum[$anzahlraume][pcarbeitsplaetze]  = 0;
        $raum[$anzahlraume][outlook]  = 0;
        $raum[$anzahlraume][spss]  = 0;
        $raum[$anzahlraume][einzeltische]  = 0;
        $raum[$anzahlraume][dvd]  = 0;
        $raum[$anzahlraume][videoschrank]  = 0;
        $raum[$anzahlraume][dozpcohnenetz]  = 0;
        $raum[$anzahlraume][smartboard]  = 0;
        $raum[$anzahlraume][spezielleausstattung]  = 0;
        		

        switch ($data[3]) {
    		case "Beamer":
        		$raum[$anzahlraume][beamer]  = True;
        		break;
    		case "Doppeltische":
        		$raum[$anzahlraume][doppeltische]  = True;
        		break;
    		case "Tafel":
        		$raum[$anzahlraume][tafel]  = True;
        		break;
        	case "OH-Projektor":
        		$raum[$anzahlraume][ohprojektor]  = True;
        		break;
        	case "PC-Arbeitsplätze":
        		$raum[$anzahlraume][pcarbeitsplaetze]  = True;
        		break;
        	case "outlook":
        		$raum[$anzahlraume][outlook]  = True;
        		break;
        	case "SPSS":
        		$raum[$anzahlraume][spss]  = True;
        		break;
        	case "Einzeltische":
        		$raum[$anzahlraume][einzeltische]  = True;
        		break;
        	case "DVD":
        		$raum[$anzahlraume][dvd]  = True;
        		break;
        	case "Videoschrank":
        		$raum[$anzahlraume][videoschrank]  = True;
        		break;
        	case "Dozenten PC ohne Netz":
        		$raum[$anzahlraume][dozpcohnenetz]  = True;
        		break;
        	case "Smart-Board":
        		$raum[$anzahlraume][smartboard]  = True;
        		break;
        	case "spezielle IT-Ausstattung":
        		$raum[$anzahlraume][spezielleausstattung]  = True;
        		break;
        }

        $anzahlraume++;
    	}
        $row++;        
    }
    fclose($handle);
}
//print_r ( $raum );
$anzahlderraeume = count($raum);
//print_r (count($raum));
unlink ( 'daten.csv' );
$fp = fopen('daten.csv', 'a');

for ($c=0; $c < $anzahlderraeume; $c++) {
	$daten = array(convertToWindowsCharset($raum[$c][id]), convertToWindowsCharset($raum[$c][gebaeude]), convertToWindowsCharset($raum[$c][raumnr]), convertToWindowsCharset($raum[$c][sitzplaetze]), convertToWindowsCharset($raum[$c][smartboard]),convertToWindowsCharset($raum[$c][tafel]), convertToWindowsCharset($raum[$c][ohprojektor]),convertToWindowsCharset($raum[$c][beamer]),convertToWindowsCharset($raum[$c][raumtyp])/*, convertToWindowsCharset($raum[$c][pcarbeitsplaetze])*/);
	fputcsv($fp, $daten,";");
}
fclose($fp);
?>