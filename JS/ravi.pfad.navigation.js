$(document).ready(function(){

	$( document ).on( "click", "a.routeMap", function() {
		  var parent = $(this).parent();
		  var parentID = $(this).parent().attr("id");
		  var target = $(this).attr("id");
		  var help = 0;
		  
		  parent.children(".routeMap").each(function(){
			if(help == 1){
				$(this).remove();
			}
			if($(this).attr("id") == target){
				help = 1;
			}
		  });	  
		  
				
		  $(".map").css("z-index", "1");
		  switch(target){
			case "standorte":
				$('#vmap').css("z-index", "5");
			break;
			case "campuslichtenberg":
				$('#vmap2').css("z-index", "5");
			break;
			case "campusschoeneberg":
				$('#vmap4').css("z-index", "5");
			break;
			case "standortbitterfelderstraße":
				$('#vmap3').css("z-index", "5");
			break;
			case "haus1":
				$('#vmap5').css("z-index", "5");
			break;
			case "haus5":
				$('#vmap6').css("z-index", "5");
			break;
			case "haus6a":
				$('#vmap7').css("z-index", "5");
			break;
			case "haus6b":
				$('#vmap8').css("z-index", "5");
			break;
			default:
			break;
		  }
		  
	});
});