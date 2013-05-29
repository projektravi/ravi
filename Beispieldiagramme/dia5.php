<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Durchschnittliche Belegung Raum XY im SoSe13",
      },
      toolTip: {
        shared: true,
      },
      axisY:{
        title: "percent",
      },
      data:[
      
       {
        type: "stackedBar100",
        showInLegend: true,
        name: "April",
        dataPoints: [
       {y: 26, label: "Montag" },
        {y: 40, label: "Dienstag" },
        {y: 60, label: "Mittwoch" },
        {y: 20, label: "Donenrstag" },
        {y: 10, label: "Freitag" },
        {y: 0, label: "Samstag" },


        ]
      },
	   {
        type: "stackedBar100",
        showInLegend: true,
        name: "Mai",
        dataPoints: [
       {y: 20, label: "Montag" },
        {y: 40, label: "Dienstag" },
        {y: 19, label: "Mittwoch" },
        {y: 40, label: "Donenrstag" },
        {y: 10, label: "Freitag" },
        {y: 0, label: "Samstag" },


        ]
      },
	   {
        type: "stackedBar100",
        showInLegend: true,
        name: "Juni",
        dataPoints: [
       {y: 14, label: "Montag" },
        {y: 44, label: "Dienstag" },
        {y: 50, label: "Mittwoch" },
        {y: 20, label: "Donenrstag" },
        {y: 10, label: "Freitag" },
        {y: 0, label: "Samstag" },


        ]
      },
	   {
        type: "stackedBar100",
        showInLegend: true,
        name: "Juli",
        dataPoints: [
       {y: 22, label: "Montag" },
        {y: 40, label: "Dienstag" },
        {y: 17, label: "Mittwoch" },
        {y: 42, label: "Donenrstag" },
        {y: 80, label: "Freitag" },
        {y: 0, label: "Samstag" },


        ]
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: "August",
        dataPoints: [
       {y: 0, label: "Montag" },
        {y: 00, label: "Dienstag" },
        {y: 0, label: "Mittwoch" },
        {y: 0, label: "Donenrstag" },
        {y: 0, label: "Freitag" },
        {y: 90, label: "Samstag" },


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