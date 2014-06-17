var already = false;

jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap({
	    map: 'standorte',
	    color: '#bababa',
		    
	    onRegionClick: function(element, code, region)
		{
			if (code == 'campuslichtenberg'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap2').css("z-index", "5");
		        
				
				$("#standort").val("1");
				if(!already)
				{
					already = true;
					$("#standort").change();
					already = false;
				}
			}
			
			if (code == 'standortbitterfelderstraße'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap3').css("z-index", "5");
		        
				$("#pfad").append("<a class='routeMap' id='standortbitterfelderstraße'>> Bitterfelder Straße</a>");
				alertRavi("Der ausgewählte Standort liefert keine Daten. Bitte navigieren Sie zum Campus Lichtenberg.");
			}
			
			if (code == 'campusschoeneberg'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap4').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap' id='campusschoeneberg'>> Schöneberg</a>");		
				alertRavi("Der ausgewählte Standort liefert keine Daten. Bitte navigieren Sie zum Campus Lichtenberg.");        
			}
			
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap').vectorMap('set', 'colors', {campusschoeneberg: '#dddddd'});

	jQuery('#vmap').vectorMap('set', 'colors', {standortbitterfelderstraße: '#dddddd'});

	jQuery('#vmap').vectorMap('set', 'colors', {campuslichtenberg: '#dddddd'});
				
	jQuery('#vmap2').vectorMap({
		map: 'lichtenberg',
		    
		onRegionClick: function(element, code, region)
		{
			if (code == 'haus1'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap5').css("z-index", "5");
				
				if(!already){
					already = true;	     	
					getSelect("#haus", "Haus 1");    	     
					already = false;
				}
				$('#vmap5').css("z-index", "1");
				$('#vmap9').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap sw' id='stockwerk12og'>> Stockwerk 2 OG</a>");	
			}
			
			if (code == 'haus5'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap6').css("z-index", "5");
		     
				if(!already){
					already = true;	 
					getSelect("#haus", "Haus 5");
					already = false;
				}	
				$('#vmap6').css("z-index", "1");
				$('#vmap10').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap sw' id='stockwerk5eg'>> Stockwerk EG</a>");	
			}
			
			if (code == 'haus6a'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap7').css("z-index", "5");
				
				if(!already){
					already = true;	 	
					getSelect("#haus", "Haus 6A"); 
					already = false;
				}   		     
			}
			
			if (code == 'haus6b6c'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap8').css("z-index", "5");
		     
				if(!already){
					already = true;	 
					getSelect("#haus", "Haus 6B");
					already = false;
				}    
			}
			
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap2').vectorMap('set', 'colors', {border1: '#bababa'});

	jQuery('#vmap2').vectorMap('set', 'colors', {border2: '#bababa'});
		
	jQuery('#vmap3').vectorMap({
		map: 'bitterfelder',
		    
		onRegionClick: function(element, code, region)
		{

				exit();

		},
		    
		onRegionOver: function(element, code, region)
		{
			
				exit();
			
		}

	});
		
	jQuery('#vmap3').vectorMap('set', 'colors', {border1: '#bababa'});
	
		jQuery('#vmap4').vectorMap({
		map: 'schoeneberg',
		    
		onRegionClick: function(element, code, region)
		{

				exit();

		},
		    
		onRegionOver: function(element, code, region)
		{
			
				exit();
			
		}

	});
		
	jQuery('#vmap4').vectorMap('set', 'colors', {border1: '#bababa'});
				
	jQuery('#vmap5').vectorMap({
		map: '1_stockwerke',
		    
		onRegionClick: function(element, code, region)
		{
			
			if (code == 'stockwerk12og'){
			        
				$('#vmap5').css("z-index", "1");
				$('#vmap9').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap sw' id='stockwerk12og'>> Stockwerk 2 OG</a>");	
		     
			}
		
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap5').vectorMap('set', 'colors', {border1: '#bababa'});
					
	jQuery('#vmap6').vectorMap({
		map: '5_stockwerke',
		    
		onRegionClick: function(element, code, region)
		{
			
			if (code == 'stockwerk5eg'){
			        
				$('#vmap6').css("z-index", "1");
				$('#vmap10').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap sw' id='stockwerk5eg'>> Stockwerk EG</a>");			     
			}
		
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap6').vectorMap('set', 'colors', {border1: '#bababa'});
				
	jQuery('#vmap7').vectorMap({
		map: '6a_stockwerke',
		    
		onRegionClick: function(element, code, region)
		{
			
			if (code == 'stockwerk6a1og'){
			        
				$('#vmap7').css("z-index", "1");
				$('#vmap11').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6a1og'>> Stockwerk 1 OG</a>");			     
			}
			
			if (code == 'stockwerk6a3og'){
			        
				$('#vmap7').css("z-index", "1");
				$('#vmap12').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6a3og'>> Stockwerk 3 OG</a>");	
			}
		
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap7').vectorMap('set', 'colors', {border1: '#bababa'});
	jQuery('#vmap7').vectorMap('set', 'colors', {border2: '#bababa'});
	
	jQuery('#vmap8').vectorMap({
		map: '6b_stockwerke',
		    
		onRegionClick: function(element, code, region)
		{
			
			if (code == 'stockwerk6beg'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap13').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6beg'>> Stockwerk EG</a>");	
			}
			
			if (code == 'stockwerk6b1og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap14').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6b1og'>> Stockwerk 1 OG</a>");	
			}
		
			if (code == 'stockwerk6b2og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap15').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6b2og'>> Stockwerk 2 OG</a>");	
			}
			
			if (code == 'stockwerk6b3og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap16').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6b3og'>> Stockwerk 3 OG</a>");	
			}
			
			if (code == 'stockwerk6b4og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap17').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap sw' id='stockwerk6b4og'>> Stockwerk 4 OG</a>");	
			}
		
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap8').vectorMap('set', 'colors', {border1: '#bababa'});
	jQuery('#vmap8').vectorMap('set', 'colors', {border2: '#bababa'});
	jQuery('#vmap8').vectorMap('set', 'colors', {border3: '#bababa'});
	jQuery('#vmap8').vectorMap('set', 'colors', {border4: '#bababa'});
	jQuery('#vmap8').vectorMap('set', 'colors', {border5: '#bababa'});
	
	jQuery('#vmap9').vectorMap({
		map: '1_2og',
		    
		onRegionClick: function(element, code, region)
		{

			/*if (code == '1.2068'){
				if(!already){
			already = true;
				getSelect("#raum", "12.068");
				already = false;
			}
			}
			if (code == '1.2067'){
				if(!already){
			already = true;
				getSelect("#raum", "12.067");
				already = false;
			}
			}
			if (code == '1.2066'){
				if(!already){
			already = true;
				getSelect("#raum", "12.066");
				already = false;
			}
			}
			if (code == '1.2065'){
				if(!already){
			already = true;
				getSelect("#raum", "12.065");
				already = false;
			}
			}*/

			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap9').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG22: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG23: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG24: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG25: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG26: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG27: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG28: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG29: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG30: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG31: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG32: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG33: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG34: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG35: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG36: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG37: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG38: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG39: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG40: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG41: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG42: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG43: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG44: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG45: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG46: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG47: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG48: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG49: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG50: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG51: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG52: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG53: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG54: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG55: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG56: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG57: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG58: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG59: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG60: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG61: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG62: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG63: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG64: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG65: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG66: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG67: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG68: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG69: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG70: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG71: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG72: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG73: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG74: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG75: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG76: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG77: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG78: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG79: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG80: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG81: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG82: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG83: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG84: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG85: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG86: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG87: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG88: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG89: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG90: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG91: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG92: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG93: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG94: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG95: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG96: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG97: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG98: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG99: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG100: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG101: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG102: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG103: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG104: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG105: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG106: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG107: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG108: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG109: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG110: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG111: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG112: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG113: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG114: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG115: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG116: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG117: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG118: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG119: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG120: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG121: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG122: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG123: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG124: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG125: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG126: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG127: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG128: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG129: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG130: '#bababa'});
	jQuery('#vmap9').vectorMap('set', 'colors', {EG131: '#bababa'});
	
	jQuery('#vmap10').vectorMap({
		map: '5_eg',
		    
		onRegionClick: function(element, code, region)
		{

			/*if (code == '5.0001'){
				if(!already){
					already = true;
					getSelect("#raum", "50.001");
					already = false;
				}
			}
			if (code == '5.0002'){
				if(!already){
					already = true;
					getSelect("#raum", "50.002");
					already = false;
				}
			}
			if (code == '5.0003'){
				if(!already){
					already = true;
					getSelect("#raum", "50.003");
					already = false;
				}
			}
			if (code == '5.0014'){
				if(!already){
					already = true;
					getSelect("#raum", "50.014");
					already = false;
				}
			}
			if (code == '5.0015'){
				if(!already){
					already = true;
					getSelect("#raum", "50.015");
					already = false;
				}
			}*/


			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap10').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap10').vectorMap('set', 'colors', {EG12: '#bababa'});
	
	jQuery('#vmap11').vectorMap({
		map: '6a_1og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap11').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG22: '#bababa'});
	jQuery('#vmap11').vectorMap('set', 'colors', {EG23: '#bababa'});
	
	jQuery('#vmap12').vectorMap({
		map: '6a_3og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap12').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap12').vectorMap('set', 'colors', {EG22: '#bababa'});
	
	jQuery('#vmap13').vectorMap({
		map: '6b_eg',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap13').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG22: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG23: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG24: '#bababa'});
	jQuery('#vmap13').vectorMap('set', 'colors', {EG25: '#bababa'});
	
	jQuery('#vmap14').vectorMap({
		map: '6b_1og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap14').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG22: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG23: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG24: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG25: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG26: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG27: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG28: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG29: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG30: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG31: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG32: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG33: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG34: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG35: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG36: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG37: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG38: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG39: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG40: '#bababa'});
	jQuery('#vmap14').vectorMap('set', 'colors', {EG41: '#bababa'});
	
	jQuery('#vmap15').vectorMap({
		map: '6b_2og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap15').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap15').vectorMap('set', 'colors', {EG19: '#bababa'});
	
	jQuery('#vmap16').vectorMap({
		map: '6b_3og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap16').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG22: '#bababa'});
	jQuery('#vmap16').vectorMap('set', 'colors', {EG23: '#bababa'});
	
	jQuery('#vmap17').vectorMap({
		map: '6b_4og',
		    
		onRegionClick: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		},
		    
		onRegionOver: function(element, code, region)
		{
			if (region == 'NONE'){
				exit();
			}
		}

	});
		
	jQuery('#vmap17').vectorMap('set', 'colors', {EG: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG2: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG3: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG4: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG5: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG6: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG7: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG8: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG9: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG10: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG11: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG12: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG13: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG14: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG15: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG16: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG17: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG18: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG19: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG20: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG21: '#bababa'});
	jQuery('#vmap17').vectorMap('set', 'colors', {EG22: '#bababa'});
	

	
});

function getSelect(it, which){
	var pw2;
	var pw = "";
	$(it).children("option").each(function(i){
		if($(this).text().search(which) != -1){
			pw = $(this).attr("value");
			return false;
		}
	});
	if(pw == ""){
		pw2 = "0@pw0";
	}
	else
	{
		pw2 = pw;
	}
	if(pw2 != "0@pw0"){
		$(it).val(pw2);
		$(it).change();
	}else if(pw2 == "0@pw0" && it == "#raum"){
		alertRavi("Der Raum " + which + " befindet sich nicht in der Datenbank. Bitte wählen Sie einen anderen Raum aus!");
		$("#raum").val("");
		$("#raum").change();
	}
}

$(document).ready(function(){
	$("path[original='#dddddd']").click(function(){
		var id = $(this).attr("id");
		var id2 = id;
		id = id.substring(id.indexOf("_")+1, id.length);
		if(!already && id.substring(0, 9) != "stockwerk" && id.substring(0, 4) != "haus" && id.substring(0, 4) != "camp" && id.substring(0, 4) != "stan"){
			already = true;
			getSelect("#raum", id);
			already = false;
		}
		id2 = id2.substring(id2.indexOf("jqvmap")+2, id2.indexOf("_"));
		$("div[id^='vmap']").css("z-index", "1");
		$("#"+id2).css("z-index", "5");
	});

	$("#standort").change(function(){
		var haus = $("#standort :selected").text();
		$("#pfad").find("a+a+a ~ a").remove();
		$("#pfad").find("a+a+a").remove();
		switch(haus){
			case "Campus Lichtenberg":
				if(!already)
				{
					already = true;
					$("#jqvmap1_campuslichtenberg").trigger("click");
					already = false;
				}
				$("#pfad").append("<a class='routeMap' id='campuslichtenberg'>> Lichtenberg</a>");
			break;
			default:
			break;
		}
	});

	$("#haus").change(function(){
		var haus = $("#haus :selected").text();
		$("#pfad").find("a+a+a+a ~ a").remove();
		$("#pfad").find("a+a+a+a").remove();
		switch(haus){
			case "Haus 1":
				if(!already)
				{
					already = true;
					$("#jqvmap2_haus1").trigger("click");
					already = false;
				}
				$("#pfad").append("<a class='routeMap' id='haus1'>> Haus 1</a>");	
			break;
			case "Haus 6A":
				if(!already)
				{
					already = true;
					$("#jqvmap2_haus6a").trigger("click");
					already = false;
				}
				$("#pfad").append("<a class='routeMap' id='haus6a'>> Haus 6A</a>");
			break;
			case "Haus 6B":
				if(!already)
				{
					already = true;
					$("#jqvmap2_haus6b6c").trigger("click");
					already = false;
				}
				$("#pfad").append("<a class='routeMap' id='haus6b'>> Haus 6B</a>");
			break;
			case "Haus 5":
				if(!already)
				{
					already = true;
					$("#jqvmap2_haus5").trigger("click");
					already = false;
				}
				$("#pfad").append("<a class='routeMap' id='haus5'>> Haus 5</a>");
			break;
			default:
			break;
		}
	});

	$("#raum").change(function(){
		var raum = $("#raum :selected").text();
		var xpw;
		if($("#haus :selected").text() == "Haus 6A"){
			raum = raum.substring(0, 6);
		}else if($("#haus :selected").text() == "Haus 6B"){
			if(raum.substring(0, 2) == "Z "){
				raum = raum.substr(2, 6);
			}else if(raum.substring(0, 2) == "6B"){
				raum = raum.substr(0, 6);
			}
		}else if($("#haus :selected").text() == "Haus 5"){
			raum = raum.replace("0.", ".0");
			xpw = raum;
		}else if($("#haus :selected").text() == "Haus 1"){
			raum = raum.replace("2.", ".2");
			xpw = raum;
		}
		if(!already){
			already = true;
			if($("path[id*='" + raum + "']").length > 0){
				$("path[id*='" + raum + "']").trigger("click");
				etage(raum, $("#haus :selected").text(), $(".routeMap.sw").length ? $(".routeMap.sw").html().replace("&gt;", "") : null);
			}else{
				if(raum != "Bitte " && raum != xpw){
					alertRavi("Der von Ihnen angeforderte Raum ist nicht auf dem Grundriss verfügbar! Sie können Ihn trotzdem auswerten lassen.");
				}
			}
			already = false;
		}
	});
});

function alertRavi(text, isWarning){
	var bild = "Bilder\\info_sign.png";
	if (isWarning)
		bild = "Bilder\\warning_page.png"
	var htmlSchnippsel = "<div id='alertRavi'>";
	htmlSchnippsel += "<table height='100%' width='100%'>";
	htmlSchnippsel += "<tr><td valign='middle' align='center'><img src='" + bild + "' width='25'></td>";
	htmlSchnippsel += "<td align='center' style='padding: 10px'>" + text + "</td></tr></table>";
	htmlSchnippsel += "</div>";
	//$("body").prepend("<div id='alertRavi'><a>" + text + "</a></div>");
	$("body").prepend(htmlSchnippsel);
	$("#alertRavi").css("margin-left", ($(window).width()/2)-150);
	$("#alertRavi").css("margin-top", 0);
	setTimeout(function(){$("#alertRavi").css("margin-top", -150);setTimeout(function(){$("#alertRavi").remove();}, 1000)}, 5000);
}

function etage(room, house, eta){
	if(eta == null){
		eta = " Stockwerk 1 OG";
		$("#pfad").append("<a class='routeMap sw' id='stockwerk'></a>");
	}
	switch(house){
		case "Haus 1":
		case "Haus 5":
			room = room.substr(room.indexOf(".")+1, 1);
		break;
		case "Haus 6A":
			room = room.substr(room.indexOf("6A")+3, 1);
		break;
		case "Haus 6B":
			room = room.substr(room.indexOf("6B")+3, 1);
		break;
	}
	if(room != "0"){
		if(eta.substr(11, 1) != "E"){
			eta = eta.replace(eta.substr(11, 1), room);
		}else{
			eta = eta.replace(eta.substring(11, eta.length), room + " OG");
		}
	}else{
		eta = " Stockwerk EG"
	}
	$(".routeMap.sw").html(">" + eta);
}