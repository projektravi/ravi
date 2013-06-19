<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: " durchschnittliche Belegung des Raums XY durch versch. Fachbereiche im WS12",
        fontFamily: "Impact",
        fontWeight: "normal",
      },

      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {
        //startAngle: 45,
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: true,
       dataPoints: [
       {  y: 63, legendText:"VI 63%", indexLabel: "VI 63%" },
       {  y: 32.0, legendText:"PuMa 32%", indexLabel: "PuMa 32%" },
       {  y: 7, legendText:"Polizei 7%", indexLabel: "Polizei 7%" },
       {  y: 2, legendText:"Ius 2%", indexLabel: "Ius 2%" },
       {  y: 5, legendText:"Andere 5%", indexLabel: "Andere 5%" },
       ]
     }
     ]
   });

    chart.render();
  }
  </script>
  <script type="text/javascript" src="canvasjs.js"></script>
  <body>
    <div id="chartContainer" style="height: 300px; width: 100%;">
    </div>
  </body>
 </html>