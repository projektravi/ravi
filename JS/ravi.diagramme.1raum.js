//var tagnt = $("#Day :selected").text();
//$("#Day").val(tagnt);
function oeffneNeuenTab() {
	window.open('index.php');
}

// Fragt die Daten zu einem ausgewählten Raum und Zeitraum ab
function rd1FrageDatenAb() {
	rd1HideAllContainer();
	if ($("#Einzelsicht").is(":checked") == false && $("#Gesamtsicht").is(":checked") == false) {
		$('#grundrisse').show();
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
	//var divGrundgrisse = $('#grundrisse');
	$('#grundrisse').hide();	
	/*
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
	};*/		
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumAuswahl.php",	
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {Zeitraum: zeitraum, RaumID: raumid, Tag: tag, Monat: monat, Jahr: jahr, RaumNr: raumNr, Samstag: mitSamstag, Sonntag: mitSonntag,
				Diagramm1: true, Diagramm2: true, Diagramm3: true, Diagramm4: true
		},
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
	var daten, titel, hoehe, legende;
	// Daten der Diagramme
	var belegung_absolut, kategorien_y, belegt, nicht_belegt, belegung_pro_stunde, kategorien_x;
	// Puffer
	var i, j, y_wert, a_proz, a_stunden;
	// Belegung absolut für den Zeitraum im Kuchendiagramm
	// aktuell für: 1 Tag, 7 Tage, 4 Wochen
	if (zeitraum == 1 || zeitraum == 2 || zeitraum == 3) {
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
	// Belegung nach Tage / Wochen aufgeschlüsselt in einer StackedBar
	// aktuell für: 7 Tage, 4 Wochen
	if (zeitraum == 2 || zeitraum == 3) {
		if (zeitraum == 2) {
			belegung_absolut = response.belegung_absolut_pro_tag;
		} else if (zeitraum == 3) {
			belegung_absolut = response.belegung_absolut_pro_woche;
		}
		kategorien_y =  new Array();
		belegt = new Array();
		nicht_belegt = new Array();
		i = 0;
		for (i = 0; i < belegung_absolut.length; i++) {
			// Daten aus Übergabearray holen
			y_wert = belegung_absolut[i].Buchung_fuer;
			a_proz = belegung_absolut[i].ProzBelegung;
			// Arrays für Balkendiagramm füllen
			kategorien_y.push(y_wert);
			belegt.push(a_proz);
			nicht_belegt.push(100-a_proz);			
		}	
		daten = new Array();	
		daten.push({name: "nicht belegt", data: nicht_belegt});
		daten.push({name: "belegt", data: belegt});
		titel = "Durchschnittliche Belegung des Raumes " + response.raumnr + "<br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		rdStackedBar("diagramm2", titel, "Belegung in %", kategorien_y, daten, 100);	
	}
	// Belegung nach Tagen aufgeschlüsselt in einer ColumnChart
	// aktuell für: 4 Wochen
	if (zeitraum == 3) {
		belegung_absolut = response.belegung_absolut_pro_tag;	
		daten = new Array();
		i = 0;
		for (i = 0; i < belegung_absolut.length; i++) {
			// Daten aus Übergabearray holen
			y_wert = belegung_absolut[i].Buchung_fuer;
			a_proz = belegung_absolut[i].ProzBelegung;
			// Arrays für Balkendiagramm füllen
			daten.push([y_wert, a_proz]);
		}	
		titel = "Durchschnittliche Belegung des Raumes " + response.raumnr + "<br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		rdColumn("diagramm3", titel, "Belegung in %", daten, 100);
	}
	// Belegung nach Tagen und Uhrzeiten aufgeschlüsselt in einer HeatMap
	// aktuell für: 1 Tag, 7 Tage, 4 Wochen
	if (zeitraum == 1 || zeitraum == 2 || zeitraum == 3) {
		if (zeitraum == 1 || zeitraum == 2) {
			belegung_pro_stunde = response.belegung_pro_tag_pro_stunde;
		} else if (zeitraum == 3) {
			belegung_pro_stunde = response.belegung_pro_tag_pro_woche;
		}
		kategorien_x = new Array();
		kategorien_y = new Array();
		daten = new Array();
		j = 0;
		for (i = 0; i < belegung_pro_stunde.length; i++) {
			// Daten aus Übergabearray holen
			y_wert = belegung_pro_stunde[i].Buchung_fuer;
			a_stunden = belegung_pro_stunde[i].StundenBelegung;
			// Arrays für Heatmap füllen
			for (j = 0; j < a_stunden.length; j++) {
				// im ersten Durchlauf die X-Achse noch belegen
				if (i == 0) {
					kategorien_x.push(a_stunden[j].Stunde + " Uhr");				
				}
				daten.push([j,i,a_stunden[j].Belegt]);	
			}				
			kategorien_y.push(y_wert);
		}	
		if (zeitraum == 1) {
			hoehe = 165;
			legende = false;
			titel = "Belegung des Raumes " + response.raumnr + " pro Tag und Stunde <br/>" + response.datum_begin + "";
		} else if (zeitraum == 2) {
			hoehe = null;			
			legende = false;
			titel = "Belegung des Raumes " + response.raumnr + " pro Tag und Stunde <br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		} else if (zeitraum == 3) {
			hoehe = null;			
			legende = true;
			titel = "Belegung des Raumes " + response.raumnr + " pro Wochentag und Stunde <br/> im Zeitraum " + response.datum_begin + " - " + response.datum_ende + "";
		}
		rdHeatMap("diagramm4", titel, kategorien_x, kategorien_y, daten, 0, 100, legende, hoehe);
	}

	return;
}

function rd1ShowContainer(container) {
	var ws1, ws2;
	container = "#" + container;
	ws1 = container + "_ws1";
	ws2 = container + "_ws2";	
	$(container).css("height", "400px");
	$(container).show();
	$(ws1).css("height", "25px");
	$(ws1).show();
	$(ws2).css("height", "25px");
	$(ws2).show();	
	
	return;
}

function rd1HideAllContainer() {
	rd1HideContainer("diagramm1");
	rd1HideContainer("diagramm2");
	rd1HideContainer("diagramm3");
	rd1HideContainer("diagramm4");
	
	return;
}

function rd1HideContainer(container) {
	var ws1, ws2;
	container = "#" + container;
	ws1 = container + "_ws1";
	ws2 = container + "_ws2";	
	$(container).css("height", "0px");
	$(container).hide();
	$(ws1).css("height", "0px");
	$(ws1).hide();
	$(ws2).css("height", "0px");
	$(ws2).hide();
	
	return;
}