<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
		backgroundColor: "#F5DEB3",
      title:{
        text: "Prozentuale Auslastung von Raum XY im SoSe13"
      },
      axisX:{
		margin: 0,
	    tickLength: 20,
        interval: 1,
        intervalType: "month",
      }, 
	  axisY:{
		//title:"Auslastung in %"
        maximum:100},
      data: [
      {
        type: "area",
        dataPoints: [//array
          {
         x: new Date(2013, 02, 20),
         y: 0
       },
		{
         x: new Date(2013, 03, 20),
         y: 50
       },
	   {
         x: new Date(2013, 04, 20),
         y: 80
       },
       {
         x: new Date(2013, 05, 21),
         y: 62
       }
       , {
         x: new Date(2013, 06, 22),
         y: 39

       }
	   , {
         x: new Date(2013, 07, 23),
         y: 47,

       }
	   , {
         x: new Date(2013, 08, 24),
         y: 7,

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