// Jquery Datepicker
$(function() {
	$( "#datepicker" ).datepicker({
		//zeigt Kalender-Bild als Button
		showOn: "button",	
		buttonImage: "./Bilder/calendar1.png",
		buttonImageOnly: true,
		
		onSelect: function(dateText, inst) {
			var startDate = new Date(dateText); 
			//ausgewähltes Datum aus Datepicker einlesen
			var selDay = startDate.getDate(); 	
			var selmonth=startDate.getMonth()+1; 
			var selyear=startDate.getFullYear(); 
			//einzelne DropDown-Menüs mit eingelesenem Wert ändern
			$("#Day").val(selDay); 					
			$("#Month").val(selmonth); 				
			$("#Year").val(selyear); 				
		}
	});
});

// deutsche Initialisierung des Datepickers
jQuery(function($){
	$.datepicker.regional['de'] = {
		 closeText: 'schließen',
		 prevText: '&#x3c;zurück',
		 nextText: 'Vor&#x3e;',
		 currentText: 'heute',
		 monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
		 monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
		 dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		 dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		 dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		 firstDay: 1, //erster Tag = Montag
		 isRTL: false,
		 showMonthAfterYear: false,
		 yearSuffix: ''
	 };
	$.datepicker.setDefaults($.datepicker.regional['de']);
});

// On-Change-Funktion an Optionsmenüs für Datumpicker hängen
$(function () {
	$("#Month").on("change", function () { BindDays();});
	$("#Year").on("change", function () { BindDays();});
	BindDays();
});

// On-Change-Funktion für Datumsauswahl über Optionsmenüs
function BindDays() {
	var month = $("#Month").val(); //var month bekommt Wert d.ausgewählten Monats aus Dropdown zugewiesen
	var dayDropDown = $("#Day"); //var dayDropDown bekommt Wert d.ausgewählten Tages aus Dropdown zugewiesen
	dayDropDown.empty();
	
	if (month == 2) {   //Februar
		for (var i = 1; i <= 28; i++) {
			dayDropDown.append("<option value=" + i + ">" + i + "</option>"); //max Wert von i (28) wird angehängt
		}
		var year = $("#Year").val(); // Variable year bekommt Wert d. ausgewählten Jahres aus Dropdown zugewiesen
		if (parseInt(year) % 4 == 0) {  //bei Schaltjahr
			dayDropDown.append("<option value='29'>29</option>"); //29 wird im DropDown angehängt
		}
	}	
	else if (month == 4 || month == 6 || month == 9 || month == 11) { //Monate mit 30 Tagen
		for (var i = 1; i <= 30; i++) {
			dayDropDown.append("<option value=" + i + ">" + i + "</option>");
		}
	}	
	else {
		for (var i = 1; i <= 31; i++) { //Monate mit 31 Tagen
			dayDropDown.append("<option value=" + i + ">" + i + "</option>");
		}
	}
}