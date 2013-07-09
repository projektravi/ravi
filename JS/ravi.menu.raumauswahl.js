// Einstiegspunkt ins Menu - Anfrage an den Server um die Standorte auszulesen
function rmrFrageStandorteAb() {
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/menuFrageStandorteAb.php",		
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rmrLadeStandorteInMenu(data); }
	});
}

// Standorte laden - Callback-Funktion von rmrFrageStandorteAb()
function rmrLadeStandorteInMenu(data) {
	var f = document.menu;
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	f.standort.options.length = 0;
	f.standort.disabled = false;
	f.standort.options[0] = new Option("Bitte auswählen","");
	for (var i = 0; i < response.length; i++) {
		f.standort.options[i+1] = new Option(rhDecodeUtf8(response[i].Bezeichnung),response[i].StandortID);
	}	
}

// Anfrage an den Server um die Häuser zu einem ausgewähltem Standort zu erhalten
function rmrFrageHaeuserAb(f) {
	var id = f.standort.value;
	if (id == "") {
		f.haus.options.length = 0;
		f.haus.options[0] = new Option("Standort auswählen","");
		f.haus.disabled = true;
		rmrFrageRaeumeAb(f);
		return;		
	}
	f.haus.options.length = 0;
	f.haus.options[0] = new Option("Bitte warten","");
	f.haus.disabled = true;
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/menuFrageHaeuserAb.php",
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {StandortID: id},
		datatype: "json",
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rmrLadeHaeuserInMenu(data); }
	});
}

// Häuser laden - Callback-Funktion von rmrFrageHaeuserAb()
function rmrLadeHaeuserInMenu(data) {
	var f = document.menu;
	var response = $.parseJSON(data);	
	if (response.length == 0) {
		f.haus.options.length = 0;
		f.haus.options[0] = new Option("Keine Häuser hinterlegt","");
		rmrFrageRaeumeAb(f);
		return;
	}
	f.haus.options.length = 0;
	f.haus.disabled = false;
	f.haus.options[0] = new Option("Bitte auswählen","");	
	for (var i = 0; i < response.length; i++) {
		f.haus.options[i+1] = new Option(response[i].Bezeichnung,response[i].GebaeudeID);
	}
	rmrFrageRaeumeAb(f);
}

// Anfrage an den Server um die Räume zu einem ausgewähltem Haus zu erhalten
function rmrFrageRaeumeAb(f) {
	var id = f.haus.value;
	if (id == "") {
		f.raum.options.length = 0;
		f.raum.options[0] = new Option("Haus auswählen","");
		f.raum.disabled = true;
		return;		
	}
	f.raum.options.length = 0;
	f.raum.options[0] = new Option("Bitte warten","");
	f.raum.disabled = true;
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/menuFrageRaeumeAb.php",
		// Daten, die an Server gesendet werden soll in JSON Notation
		data: {GebaeudeID: id},
		datatype: "json",
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { rmrLadeRaeumeInMenu(data); }
	});
}

//  Räume laden - Callback-Funktion von rmrFrageRaeumeAb()
function rmrLadeRaeumeInMenu(data) {
	var f = document.menu;
	var response = $.parseJSON(data);	
	if (response.length == 0) {
		f.raum.options.length = 0;
		f.raum.options[0] = new Option("Keine Räume hinterlegt","");
		return;
	}
	f.raum.options.length = 0;
	f.raum.disabled = false;
	f.raum.options[0] = new Option("Bitte auswählen","");	
	for (var i = 0; i < response.length; i++) {
		f.raum.options[i+1] = new Option(response[i].Raumnr,response[i].RaumID);
	}	
}

rmrFrageStandorteAb();

