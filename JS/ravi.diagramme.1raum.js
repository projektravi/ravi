//var tagnt = $("#Day :selected").text();
//$("#Day").val(tagnt);
function oeffneNeuenTab() {
	window.open('index.php');
}

// Fragt die Daten zu einem ausgewählten Raum und Zeitraum ab
function rd1FrageDatenAb() {
	$('#diagramm1').hide();
	$('#whitespace1').hide();
	$('#diagramm2').hide();
	$('#whitespace2').hide();	
	$('#diagramm3').hide();	
	if ($("#Einzelsicht").is(":checked") == false && $("#Gesamtsicht").is(":checked") == false) {
		$('#diagramm0').show();
		alert("Bitte waehlen Sie den Darstellungstyp!");
		return;
	}
	var f = document.menu;
	var zeitraum = $("input[name='zeitraum']:checked").val()
	var raumid = f.raum.value;
	var raumNr = $("#raum option:selected").text();
	var tag = f.Day.value;
	var monat = f.Month.value;
	var jahr = f.Year.value;		
	var mitSamstag = $("#Sa").is(":checked");
	var mitSonntag = $("#So").is(":checked");
	$('#diagramm0').hide();	
	if ($("#Einzelsicht").is(":checked")){		
		$('#diagramm1').show();		
		$('#whitespace1').show();
		$('#whitespace1').css("height", "50px");		
	};
	if ($("#Gesamtsicht").is(":checked")){
		if (zeitraum != 1) {
			$('#diagramm2').show();
			$('#whitespace2').show();
			$('#whitespace2').css("height", "50px");
		}
		$('#diagramm3').show();
	};		
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumAuswahl.php",	
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {Zeitraum: zeitraum, RaumID: raumid, Tag: tag, Monat: monat, Jahr: jahr, RaumNr: raumNr, Samstag: mitSamstag, Sonntag: mitSonntag},
		datatype: "json",	
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
		success: function(data) { rd1InitialisiereDiagram(data); }
	});
	
	return;
}

function rd1InitialisiereDiagram(data) {	
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	var zeitraum = response.zeitraum;
	// Aussehen der Diagramme
	var daten, titel, hoehe;
	// Daten der Diagramme
	var belegung_absolut, kategorien_y, belegt, nicht_belegt, belegung_pro_stunde, kategorien_x;
	// Puffer
	var i, j, a_tag, a_proz, a_stunden;
	// Belegung absolut für den Zeitraum im Kuchendiagramm
	// aktuell für: 1 Tag, 7 Tage
	if (zeitraum == 1 || zeitraum == 2) {
		daten =  new Array();
		daten.push({name: "nicht belegt", y: 100 - response.belegt_gesamt});
		daten.push({name: "belegt", y: response.belegt_gesamt});	 
		 if (zeitraum == 1) {
			titel = "Absolute Belegung des Raumes " + response.raumnr + "<br/>" + response.datum_begin + "";
		} else {
			titel = "Absolute Belegung des Raumes " + response.raumnr + "<br/> im Zeitraum " + response.datum_begin + " - "	+ response.datum_ende + "";
		}
		rd3DPie("diagramm1", titel , "Durchschnitt", daten);
	}
	// Belegung nach Tage aufgeschlüsselt in einer StackedBar
	// aktuell für: 7 Tage
	if (zeitraum == 2) {
		belegung_absolut = response.belegung_absolut_pro_tag;
		kategorien_y =  new Array();
		belegt = new Array();
		nicht_belegt = new Array();
		i = 0;
		for (i = 0; i < belegung_absolut.length; i++) {
			// Daten aus Übergabearray holen
			a_tag = belegung_absolut[i].Buchung_fuer;
			a_proz = belegung_absolut[i].ProzBelegung;
			// Arrays für Balkendiagramm füllen
			kategorien_y.push(a_tag);
			belegt.push(a_proz);
			nicht_belegt.push(100-a_proz);			
		}	
		daten = new Array();	
		daten.push({name: "nicht belegt", data: nicht_belegt});
		daten.push({name: "belegt", data: belegt});
		titel = "Durchschnittliche Belegung des Raumes " + response.raumnr + "<br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		rdStackedBar("diagramm2", titel, "Belegung in %", kategorien_y, daten, 100);	
	}
	// Belegung nach Tagen und Uhrzeiten aufgeschlüsselt in einer HeatMap
	// aktuell für: 1 Tag, 7 Tage
	if (zeitraum == 1 || zeitraum == 2) {
		belegung_pro_stunde = response.belegung_pro_tag_pro_stunde;
		kategorien_x = new Array();
		kategorien_y = new Array();
		daten = new Array();
		j = 0;
		for (i = 0; i < belegung_pro_stunde.length; i++) {
			// Daten aus Übergabearray holen
			a_tag = belegung_pro_stunde[i].Buchung_fuer;
			a_stunden = belegung_pro_stunde[i].StundenBelegung;
			// Arrays für Heatmap füllen
			for (j = 0; j < a_stunden.length; j++) {
				// im ersten Durchlauf die X-Achse noch belegen
				if (i == 0) {
					kategorien_x.push(a_stunden[j].Stunde + " Uhr");				
				}
				daten.push([j,i,a_stunden[j].Belegt]);	
			}				
			kategorien_y.push(a_tag);
		}	
		if (zeitraum == 1) {
			hoehe = 165;
			titel = "Belegung des Raumes " + response.raumnr + " pro Tag und Stunde <br/>" + response.datum_begin + "";
		} else {
			hoehe = null;
			titel = "Belegung des Raumes " + response.raumnr + " pro Tag und Stunde <br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		}
		rdHeatMap("diagramm3", titel, kategorien_x, kategorien_y, daten, 0, 1, false, hoehe);
	}

	return;
}