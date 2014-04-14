// Dekodiert einen UTF8-kodierten String
function rhDecodeUtf8(s) {
  return decodeURI(encodeURI(s));
}

// Kapselung der MouseHover-Funktion für die Bilder der Diagramme im Menu
$(function() {
	$('.hover').hover(function(){
		$('.infobox',this).toggle()
	})
})
		
// Testfunktion
function anzeigen(){
	var standort = $("#standort option:selected").text();
	var haus = $("#haus option:selected").text();
	var raum = $("#raum option:selected").text();
	//var node = document.getElementById('pfad');
	//var standortHeader = document.createTextNode(standort);
	//node.parentNode.insertBefore(standortHeader, node );			
	alert(standort+" "+haus+raum);
	
}
