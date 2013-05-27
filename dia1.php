<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Prozentuale Auslastung des Raums XY im SoSe13"
      },
      axisX:{
        interval: 1,
        intervalType: "month",
      },
	  axisY:{
		maximum: 100,
		},
      data: [
      {
        type: "line",
		indexLabelFontColor: "orangered",
        dataPoints: [//array
        {
         x: new Date(2013, 03, 1),
         y: 100, indexLabel: "Semesterstart"
       },
       {
         x: new Date(2013, 04, 3),
         y: 60
       }
       , {
         x: new Date(2013, 05, 5),
         y: 20,

       }, {
         x: new Date(2013, 06, 7),
         y: 80, indexLabel: "Klausurenphase"

       }, {
         x: new Date(2013, 07, 11),
         y: 0, indexLabel: "Semesterferien"

       }, {
         x: new Date(2013, 09, 1),
         y: 95, indexLabel: "Semesterstart"

       }, {
         x: new Date(2013, 09, 23),
         y: 90,

       
       }
       ],
     }
     ]
   });

    chart.render();
  }
  </script>
  <script type="text/javascript" src="canvasjs.js"></script>
</head>
<body>
  <div id="chartContainer" style="height: 300px; width: 100%;">
  </div>
</body>
</html>