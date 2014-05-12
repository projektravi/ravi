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