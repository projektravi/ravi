<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
	backgroundColor: "lightyellow",
 
	 title:{
        text: "Nutzung der IT-Räume im SoSe 2013",
      },
      axisY: {
        title: "percent",
		interval: 10,
       
      },
      data: [
      {
        type: "bar",
        showInLegend: true,
        legendText: "VI",
        color: "pink",
        dataPoints: [
        { y: 83, label: "6a123"},
        { y: 72, label: "6a124"},
        { y: 35, label: "6a126"},
        


        ]
      },
      {
        type: "bar",
        showInLegend: true,
        legendText: "Polizei",
        color: "green",
        dataPoints: [
        { y: 10, label: "6a123"},
        { y: 23, label: "6a124"},
        { y: 40, label: "6a126"},


        ]
      },
      {
        type: "bar",
        showInLegend: true,
        legendText: "andere",
        color: "silver ",
        dataPoints: [
        { y: 0, label: "6a123"},
        { y: 5, label: "6a124"},
        { y: 12, label: "6a126"},

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