$(document).ready(function(){

	$( document ).on( "click", "a.routeMap", function() {
		var target = $(this).attr("id");
		if(target != "diagr"){
	      $(".diagrdiv").hide();
	      $("#grundrisse").show();

	      if(!$(this).hasClass("sw")){

		  var parent = $(this).parent();
		  var parentID = $(this).parent().attr("id");
		  
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
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();
				$("#standort").val("");
				$("#standort").change();
			break;
			case "campuslichtenberg":
				$('#vmap2').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
				$("#haus").val("");
				$("#haus").change();
			break;
			case "campusschoeneberg":
				$('#vmap4').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
			break;
			case "standortbitterfelderstraße":
				$('#vmap3').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
			break;
			case "haus1":
				$('#vmap5').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
				$("#raum").val("");
				$("#raum").change();
			break;
			case "haus5":
				$('#vmap6').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
				$("#raum").val("");
				$("#raum").change();
			break;
			case "haus6a":
				$('#vmap7').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
				$("#raum").val("");
				$("#raum").change();
			break;
			case "haus6b":
				$('#vmap8').css("z-index", "5");
				$('#diagramm0').show();	
				$('#diagramm1').hide();
				$('#diagramm2').hide();	
				$("#raum").val("");
				$("#raum").change();
			break;
			default:
			break;
		  }
		}else{
			$(".sw + a").remove();
		}
		 }
	});
});