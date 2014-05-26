function rd3DPie(container, titel, hinweis, datenarray) {
	rd1ShowContainer(container);
	container = "#" + container;
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
	rd1ShowContainer(container);
	container = "#" + container;
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
	rd1ShowContainer(container);
	container = "#" + container;
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
            categories: kategorien_x_achse,
			labels: {
				align: 'center'
            }
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

function rdColumn(container, titel, hinweis, daten, maxWert) {	
	rd1ShowContainer(container);
	container = "#" + container;
	$(container).highcharts({
		chart: {
			type: 'column'
		},
		colors: [Highcharts.getOptions().colors[1]
		],
		title: {
			text: titel
		},		
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				align: 'right',
				format: '<style="font-size:8px">{value}</style>'
			}
		},
		yAxis: {
			min: 0,
			max: maxWert,
			title: {
				text: hinweis
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: 'belegt: <b>{point.y:.1f} %</b>'
		},
		series: [{
			name: 'Population',
			data: daten
		}]
	});
}

function rdLine(container, titel, hinweis, daten, maxWert, tag, monat, jahr) {
	rd1ShowContainer(container);
	container = "#" + container;
	$(container).highcharts({
		chart: {
			zoomType: 'x'
		},
		title: {
			text: titel
		},
		subtitle: {
			text: 'Ziehen Sie einen Rahmen zum reinzoomen',
			style: {                
				fontSize: '9px'
            },
			useHTML: true
		},
		xAxis: {
			type: 'datetime',
			minRange: 14 * 24 * 3600000 // fourteen days
		},
		yAxis: {
			min: 0,
			max: maxWert,
			title: {
				text: hinweis
			}
		},
		legend: {
			enabled: false
		},		
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
					stops: [
						[0, Highcharts.getOptions().colors[1]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},

		series: [{
			type: 'area',
			name: 'belegt',
			pointInterval: 24 * 3600 * 1000,
			pointStart: Date.UTC(jahr, monat, tag),
			data: daten
		}]
	});
    
}
