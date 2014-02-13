jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap({
	    map: 'standorte',
	    color: '#bababa',
		    
	    onRegionClick: function(element, code, region)
		{
			if (code == 'campuslichtenberg'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap2').css("z-index", "5");
		        
				$("#pfad").append("<a class='routeMap' id='campuslichtenberg'>> Lichtenberg</a>");
			}
			
			if (code == 'standortbitterfelderstraße'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap3').css("z-index", "5");
		        
				$("#pfad").append("<a class='routeMap' id='standortbitterfelderstraße'>> Bitterfelder Straße</a>");
			}
			
			if (code == 'campusschoeneberg'){
			        
				$('#vmap').css("z-index", "1");
				$('#vmap4').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap' id='campusschoeneberg'>> Schöneberg</a>");		        
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
				
				$("#pfad").append("<a class='routeMap' id='haus1'>> Haus 1</a>");		     		     
			}
			
			if (code == 'haus5'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap6').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='haus5'>> Haus 5</a>");		
			}
			
			if (code == 'haus6a'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap7').css("z-index", "5");
				
				$("#pfad").append("<a class='routeMap' id='haus6a'>> Haus 6A</a>");				     
			}
			
			if (code == 'haus6b6c'){
			        
				$('#vmap2').css("z-index", "1");
				$('#vmap8').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='haus6b'>> Haus 6B</a>");	
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
				
				$("#pfad").append("<a class='routeMap' id='stockwerk12og'>> Stockwerk 2 OG</a>");	
		     
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
				
				$("#pfad").append("<a class='routeMap' id='stockwerk5eg'>> Stockwerk EG</a>");			     
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
				
				$("#pfad").append("<a class='routeMap' id='stockwerk6a1og'>> Stockwerk 1 OG</a>");			     
			}
			
			if (code == 'stockwerk6a3og'){
			        
				$('#vmap7').css("z-index", "1");
				$('#vmap12').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6a3og'>> Stockwerk 3 OG</a>");	
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
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6beg'>> Stockwerk EG</a>");	
			}
			
			if (code == 'stockwerk6b1og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap14').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6b1og'>> Stockwerk 1 OG</a>");	
			}
		
			if (code == 'stockwerk6b2og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap15').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6b2og'>> Stockwerk 2 OG</a>");	
			}
			
			if (code == 'stockwerk6b3og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap16').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6b3og'>> Stockwerk 3 OG</a>");	
			}
			
			if (code == 'stockwerk6b4og'){
			        
				$('#vmap8').css("z-index", "1");
				$('#vmap17').css("z-index", "5");
		     
				$("#pfad").append("<a class='routeMap' id='stockwerk6b4og'>> Stockwerk 4 OG</a>");	
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

	jQuery('#vmap10').vectorMap({
		map: '5_eg',
		    
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
		
	jQuery('#vmap10').vectorMap('set', 'colors', {EG: '#bababa'});
	
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
	

	
});