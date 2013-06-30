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

