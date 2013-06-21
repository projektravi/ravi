<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
  
	  CanvasJS.addColorSet("greenShades",
					[//colorSet Array

					
					
					"#FE2E9A",
					"#A901DB",
					"#90EE90",                
					]);

    var chart = new CanvasJS.Chart("chartContainer",
    { theme: "theme3",
		backgroundColor: "#F8E0F7",
		colorSet: "greenShades",
      title:{
      text: " Durchschn. Belegung  Raum 6a126 ",
	  fontColor: "red",
	  borderThickness: 1,
	  cornerRadius: 4,
	  borderColor: "red",
	  padding:10,
	 
      },
      axisY:{
        title:"Auslastung in %",
		titleFontColor: "red",
		maximum: 100,
		lineColor: "blue",
		
      },
	  
	  axisX:{
		lineColor:"blue"
		},
      data: [
      {
        type: "stackedColumn",
        legendText: "It-ler",
        showInLegend: "true",
        dataPoints: [
		{  y: 20, label: "8-10 Uhr" },
        {  y: 80 , label: "10-12 Uhr"},
        {  y: 70, label: "12-14 Uhr" },
        {  y: 40, label: "14-16 Uhr" },
        {  y: 50, label: "16-18 Uhr" },
        {  y: 5, label: "18-20 Uhr",},
     

        ]
      },  {
        type: "stackedColumn",
        legendText: "Nicht It-ler",
        showInLegend: "true",
        dataPoints: [
        {  y: 0, label: "8-10 Uhr" },
        {  y: 5 , label: "10-12 Uhr"},
        {  y: 5, label: "12-14 Uhr" },
        {  y: 60, label: "14-16 Uhr" },
        {  y: 10, label: "16-18 Uhr" },
        {  y: 30, label: "18-20 Uhr",},

        ]
      },
      ]
    });

    chart.render();
  }
  </script>
 <script type="text/javascript" src="canvasjs.js"></script></head>
<body>
  <div id="chartContainer" style="height: 300px; width: 100%;">
  </div>
</body>
</html>