// Jquery Datepicker
$(function() {
	$( "#datepicker" ).datepicker({
		//zeigt Kalender-Bild als Button
		showOn: "button",	
		buttonImage: "./Bilder/calendar1.png",
		buttonImageOnly: true,
		// Ändern, wenn es neue Daten geben sollte!
		maxDate: new Date(2014, 2 - 1, 28), 
		minDate: new Date(2011, 1 - 1, 1),
		
		onSelect: function(dateText, inst) {
			var startDate = new Date(dateText); 
			//ausgewähltes Datum aus Datepicker einlesen
			var selDay = startDate.getDate(); 	
			var selmonth=startDate.getMonth()+1; 
			var selyear=startDate.getFullYear(); 
			completeDaysDropdown();			
			if (selmonth == 2) {   //Februar
				$("#Day option[value=30]").remove();
				$("#Day option[value=31]").remove();
				if (parseInt(selyear) % 4 != 0)
					$("#Day option[value=29]").remove();
			}
			else if (selmonth == 4 || selmonth == 6 || selmonth == 9 || selmonth == 11)//Monate mit 30 Tagen
				$("#Day option[value=31]").remove();	
				
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

function completeDaysDropdown(){
	var dayDropDown = $("#Day");
	// Optionen werden hinzugefügt wenn sie nicht vorhanden sind
	if ( $("#Day option[value=29]").length == 0 )
		dayDropDown.append("<option value='29'>29</option>");
	if ( $("#Day option[value=30]").length == 0 )
		dayDropDown.append("<option value='30'>30</option>");
	if ( $("#Day option[value=31]").length == 0 )
		dayDropDown.append("<option value='31'>31</option>");
};


// On-Change-Funktion für Datumsauswahl über Optionsmenüs
function BindDays() {
	var month = $("#Month").val(); //var month bekommt Wert d.ausgewählten Monats aus Dropdown zugewiesen
	var dayDropDown = $("#Day"); //var dayDropDown bekommt Wert d.ausgewählten Tages aus Dropdown zugewiesen
	var dayDropDownvalue = $("#Day").val(); // Wert des ausgewählten Tages
	var year = $("#Year").val(); // Variable year bekommt Wert d. ausgewählten Jahres aus Dropdown zugewiesen

	completeDaysDropdown();
	
	if (month == 2) {   //Februar
		$("#Day option[value=30]").remove();
		$("#Day option[value=31]").remove();
		if (parseInt(year) % 4 != 0)
			$("#Day option[value=29]").remove();
	}	
	else if (month == 4 || month == 6 || month == 9 || month == 11) { //Monate mit 30 Tagen
		$("#Day option[value=31]").remove();	

	}	
}