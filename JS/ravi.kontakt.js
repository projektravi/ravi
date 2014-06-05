var str = " margarita.elkina@hwr-berlin.de";
    var result = str.link("mailto:margarita.elkina@hwr-berlin.de");
var Neu1=  "<p></p> Haben Sie Fragen, Wünsche oder benötigen Sie noch zusätzliche Informationen zu RaVi, dann schreiben Sie uns einfach eine E-Mail an:</p>"
function changeDivKontakt(){
	document.getElementById("grafik").innerHTML =  Neu1 + result;
	$("#pfad").html("<a class='upperHead routeMap'>Kontakt</a>");
}