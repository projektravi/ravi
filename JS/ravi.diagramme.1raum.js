// Fragt die Daten zu einem ausgewählten Raum und Zeitraum ab
function rd1FrageDatenAb() {
	var f = document.menu;
	var zeitraum = $("input[name='zeitraum']:checked").val()
	var raumid = f.raum.value;
	var raumName = $("#raum option:selected").text();
	var tag = f.Day.value;
	var monat = f.Month.value;
	var jahr = f.Year.value;
	$('#diagramm1').hide();
	$('#diagramm2').hide();	
		if ($("#Einzelsicht").is(":checked")){
		$('#diagramm0').hide();	
		$('#diagramm1').show();			
	};
	if ($("#Gesamtsicht").is(":checked")){
		$('#diagramm0').hide();	
		$('#diagramm2').show();
	};		
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumAuswahl.php",	
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {Zeitraum: zeitraum, RaumID: raumid, Tag: tag, Monat: monat, Jahr: jahr},
		datatype: "json",	
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rd1InitialisiereDiagram(data, raumName); }
	});
	
}

function rd1InitialisiereDiagram(data, raumName) {	
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	var kategorien =  new Array();
	var belegt = new Array();
	var nicht_belegt = new Array();
	var i = 0;
	var sumBelegung = 0;
	var a_tag, a_proz;
	for (i = 0; i < response.length; i++) {
		// Daten aus Übergabearray holen
		a_tag = response[i].Buchung_fuer;
		a_proz = response[i].ProzBelegung;
		// tägliche Belegung aufaddieren
		sumBelegung += a_proz;
		// Arrays für Balkendiagramm füllen
		kategorien.push(a_tag);
		belegt.push(a_proz);
		nicht_belegt.push(100-a_proz);			
	}	
	// Belegung absolut für den Zeitraum im Kuchendiagramm
	var datenarray =  new Array();
	datenarray.push({name: "belegt", y: sumBelegung / (i)});
	datenarray.push({name: "nicht belegt", y: 100 - (sumBelegung / (i))});
	var titel = "Absolute Belegung des Raumes " + raumName + " im Zeitraum " + response[0].Buchung_fuer + " - "	+ response[i-1].Buchung_fuer + "";
	rd3DPie("diagramm1", titel , "Durchschnitt", datenarray);
	// Belegung nach Tage aufgeschlüsselt in einer StackedBar
	var daten = new Array();
	daten.push({name: "belegt", data: belegt});
	daten.push({name: "nicht belegt", data: nicht_belegt});
	titel = "Durchschnittliche Belegung des Raumes " + raumName + " im Zeitraum " + response[0].Buchung_fuer + " - " + response[i-1].Buchung_fuer + "";
	rdStackedBar("diagramm2", titel, "Belegung in %", kategorien, daten, 100);	

	return;
}