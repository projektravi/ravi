
function frage_raum_ab() {

	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/diagrammeRaumZeitraumauswahl.php",		
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { lege_diagram_an(data); }
	});
}

function zeichneDiagramm(diatyp,titel,xachse,yachse,datenarray) {
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

function lege_diagram_an(data) {
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	var datenarray =  new Array();
	for (var i = 0; i < response.length; i++) {
		datenarray.push({x: i+1, y: response[i].ProzBelegung, label: response[i].Buchung_fuer});
		//f.standort.options[i+1] = new Option(rhDecodeUtf8(response[i].Bezeichnung),response[i].StandortID);
	}

	
	//datenarray.push({x: 1, y: 71,label: "18.06.2013"});
	//datenarray.push({ x: 2, y: 55,label: "19.06.2013"});
	/*[
		{ x: 1, y: 71,label: "18.06.2013"},
		{ x: 2, y: 55,label: "19.06.2013"},
		{ x: 3, y: 50,label: "20.06.2013"},
		{ x: 4, y: 65,label: "21.06.2013"},
		{ x: 5, y: 95,label: "22.06.2013"},
		];*/
	zeichneDiagramm("Linie","Beispieltitel","X-Achsenbeschriftung","Y-Achsenbeschriftung",datenarray);
	
}

window.onload = function () {
	frage_raum_ab();
}

