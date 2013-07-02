jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap({
	    map: 'standorte',
	    color: '#bababa',
		    
	    onRegionClick: function(element, code, region)
		{
			if (code == 'campuslichtenberg'){
			        
				$('#vmap').css("z-index", "0");
				$('#vmap2').css("z-index", "4");
		        
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
			if (code == 'haus6a'){
			        
				$('#vmap2').css("z-index", "0");
				$('#vmap3').css("z-index", "4");
		            			        
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
		map: '6a_stockwerke',
		    
		onRegionClick: function(element, code, region)
		{
			if (code == 'stockwerk6a1og'){
			        
				$('#vmap3').css("z-index", "0");
				$('#vmap4').css("z-index", "4");
		            			        
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
		
	jQuery('#vmap3').vectorMap('set', 'colors', {border1: '#bababa'});

	jQuery('#vmap3').vectorMap('set', 'colors', {border2: '#bababa'});
				
	jQuery('#vmap4').vectorMap({
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
		
	jQuery('#vmap4').vectorMap('set', 'colors', {EG: '#bababa'});
					
});