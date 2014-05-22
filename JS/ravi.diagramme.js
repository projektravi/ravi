function rd3DPie(container, titel, hinweis, datenarray) {
	container = "#" + container;
	$(container).css("height", "400px");
	$(container).highcharts({
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		title: {
			text: titel
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
			type: 'pie',
			name: hinweis,
			data: datenarray
		}]
	});
}

function rdStackedBar(container, titel, hinweis, kategorien, daten, maxWert) {
	container = "#" + container;
	$(container).css("height", "400px");	
	$(container).highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: titel
		},
		xAxis: {
			categories: kategorien
		},
		yAxis: {
			min: 0,		
			max: maxWert,
			title: {
				text: hinweis
			}
		},
		legend: {
			reversed: true
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		series: daten
	});
}

function rdHeatMap(container, titel, kategorien_x_achse, kategorien_y_achse, daten, minWert, maxWert, mitLegende, hoehe) {
	container = "#" + container;
	$(container).css("height", "400px");
	$(container).highcharts({
        
        chart: {
            type: 'heatmap',
			height: hoehe,
            marginTop: 60,
            marginBottom: 60
        },

        title: {			
            text: titel
        },

        xAxis: {
            categories: kategorien_x_achse
        },

        yAxis: {
            categories: kategorien_y_achse,
            title: null,
			reversed: true
        },

        colorAxis: {
            min: minWert,
			max: maxWert,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[1]
        },

        legend: {
            align: 'right',
			enabled: mitLegende,
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        },

        tooltip: {
			enabled: true,
            formatter: function () {
                return this.point.value == 0 ? "nicht belegt" : "belegt zu " + this.point.value + "%";
            }
        },

        series: [{            
            borderWidth: 1,
            data: daten
        }]

    });
}