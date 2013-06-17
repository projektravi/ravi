var raum = new Array(new Array("126","127"), new Array("ABC","CDE"));

// Einstiegspunkt ins Menu - Anfrage an den Server um die Standorte auszulesen
function frage_standorte_ab() {
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/frage_standorte_ab.php",		
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { lade_standorte_in_menu(data); }
	});
}

// Standorte laden - Callback-Funktion von frage_standorte_ab()
function lade_standorte_in_menu(data) {
	var f = document.menu;
	var response = $.parseJSON(data);	
	if (response.length == 0)
		return;
	f.standort.options.length = 0;
	f.standort.disabled = false;
	f.standort.options[0] = new Option("Bitte auswählen","");
	for (var i = 0; i < response.length; i++) {
		f.standort.options[i+1] = new Option(response[i].Bezeichnung,response[i].StandortID);
	}
}

// Anfrage an den Server um die Häuser zu einem ausgewähltem Standort zu erhalten
function frage_haeuser_ab(f) {
	var id = f.standort.value;
	if (id == "")
		return;		
	f.haus.options[0] = new Option("Bitte warten");
	f.haus.disabled = true;
	// Daten an Server senden
	$.ajax({
		// pfad zur PHP Datei (ab HTML Datei)
		url: "PHP/frage_haeuser_ab.php",
		// Daten, die an Server gesendet werden soll in JSON Notation
			data: {StandortID: id},
			datatype: "json",
		// Methode POST oder GET
		type: "POST",
		// Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function(data) { lade_haeuser_in_menu(data); }
	});
}

// Häuser laden - Callback-Funktion von frage_haeuser_ab()
function lade_haeuser_in_menu(data) {
	var f = document.menu;
	var response = $.parseJSON(data);	
	if (response.length == 0) {
		f.haus.options[0] = new Option("Keine Häuser hinterlegt");
		return;
	}
	f.haus.options.length = 0;
	f.haus.disabled = false;
	f.haus.options[0] = new Option("Bitte auswählen","");	
	for (var i = 0; i < response.length; i++) {
		f.haus.options[i+1] = new Option(response[i].Bezeichnung,response[i].GebaeudeID);
	}
}

function lade_raeume(f) {
	f.raum.options.length = 0;
	f.raum.disabled = false;
	f.raum.options[0] = new Option("Bitte auswählen");
	var indexHaus = f.haus.selectedIndex;
	if (indexHaus == 0)
		return false;
	var raumA = raum[indexHaus-1];
	if (raumA == null)
		return false;
	for (var i=0; i < raumA.length; i++) {
		f.raum.options[i+1] = new Option(raumA[i],"");
	}
}

frage_standorte_ab()