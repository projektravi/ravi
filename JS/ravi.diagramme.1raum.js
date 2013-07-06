// Fragt die Daten zu einem ausgewählten Raum und Zeitraum ab
function rd1FrageDatenAb() {
	var f = document.menu;
	var raumid = f.raum.value;
	var tag = f.Day.value;
	var monat = f.Month.value;
	var jahr = f.Year.value;
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumAuswahl.php",	
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {RaumID: raumid, Tag: tag, Monat: monat, Jahr: jahr},
		datatype: "json",	
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rd1InitialisiereDiagram(data); }
	});
}

function rd1ZeichneDiagramm(titel,xachse,yachse,datenarray) {
	diatyp = $('.diagrammtyp:checked').val();	
	var chart = new CanvasJS.Chart("grafik",
	    {
	      title:{
	      	text: titel
	      },
	      axisX:{
	      	title: xachse
	      },
	      axisY:{
	        title: yachse
	      },     
	      data: [
	      {
	        type: diatyp, 
	        bevelEnabled: true, // schatten boolean
	        color: "#d92425", //
	        dataPoints: datenarray //Datenarray [{x:Wert,y:Wert,label:"Wert"},]
	      }]
	    });
	chart.render();
}

function rd1InitialisiereDiagram(data) {
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	var datenarray =  new Array();
	for (var i = 0; i < response.length; i++) {
		datenarray.push({x: i+1, y: response[i].ProzBelegung, label: response[i].Buchung_fuer});		
	}

	// Das eigentliche rendern des Diagrammes
	rd1ZeichneDiagramm("Beispieltitel", "7 Tage", "Auslastung in %",datenarray);	
}