// Fragt die Daten zu einem ausgewählten Raum und Zeitraum ab
function rd1FrageDatenAb() {
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumAuswahl.php",		
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rd1InitialisiereDiagram(data); }
	});
}

function rd1ZeichneDiagramm(diatyp,titel,xachse,yachse,datenarray) {
	if (diatyp == 'Balken')
		diatyp = "column";
	if (diatyp == 'Linie')
		diatyp = 'line';
	if (diatyp == "Kreis")
		diatyp = 'pie';
		
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
	rd1ZeichneDiagramm("Linie", "Beispieltitel", "7 Tage", "Auslastung in %",datenarray);	
}