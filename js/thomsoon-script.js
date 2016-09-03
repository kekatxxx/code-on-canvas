jQuery(function() {


/*-------------------------------------------
Load Page
---------------------------------------------*/
		
	jQuery('body').waitForImages({
            finished: function() {
                Website();
                jQuery('body').jKit();
            },
            waitForAll: true
	});

            
        /* 
        jQuery('.grid-hover').hover(function() {
            jQuery( this ).fadeOut( 100 );
            jQuery(this).find('.grid-item-text' ).addClass("animated bouceIn");
        }); 
        */


/*-------------------------------------------
Ajax link page transitions
---------------------------------------------*/

	jQuery("a.ajax-link").live("click", function(){
		jQuerythis = jQuery(this);
		var link = jQuerythis.attr('href');
		var current_url = jQuery(location).attr('href');	
		
		if( link != current_url && link != '#' ) { 
		jQuery.ajax({
			url:link,
			processData:true, 
			dataType:'html', 
			success:function(data){
				document.title = jQuery(data).filter('title').text(); 
				current_url = link;
        if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);
        
          setTimeout(function(){						
          jQuery('#preloader').delay(50).fadeIn(600);
          jQuery('html, body').delay(1000).animate({ scrollTop:  0  },1000);						
					
					setTimeout(function(){
							
            jQuery('#ajax-content').html(jQuery(data).filter('#ajax-content').html());
            jQuery('#ajax-sidebar').html(jQuery(data).filter('#ajax-sidebar').html());

						jQuery('body').waitForImages({
							finished: function() {
								Website();
								backLoading();
								jQuery('.opacity-nav').delay(50).fadeOut(600);
              },										
              waitForAll: true
						});								
					},1000);
					},0);
			}
		});
    }
    return false;
	});


/*-------------------------------------------
When you click back arrow
---------------------------------------------*/


function backLoading() {  
    jQuery(window).on("popstate", function () {
        jQuery('body').fadeOut('slow',function(){
            location.reload();
        });
        jQuery('body').fadeIn();
    });
}   

/*-------------------------------------------
Load Page - next Open Site
---------------------------------------------*/

function Website() {
		CheckScripts();	
		Masonry();
		jQuery('body').jKit();
		/*backgroundmenu();*/
                
		setTimeout(function(){
			jQuery(".preloader").fadeOut(500);							
		},2000);
		setTimeout(function(){
			jQuery('header').fadeIn();							
		},500);
                
}


/*-------------------------------------------
Init and check list scripts
---------------------------------------------*/

function CheckScripts() {

  jQuery(document).ready(function(){
    preloaderCheck();
    /*Typewriting();
    sidebarhero();*/
  });

}


/*-------------------------------------------
Masonry Check Script
---------------------------------------------*/

function Masonry() {
       var $container = jQuery('.portfolio-grid');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });
}


/*-------------------------------------------
Multi purpose init Background menu
---------------------------------------------*/

function backgroundmenu() {

  jQuery(document).ready(function(){
     if(jQuery("#header-fade").length) {

         jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 10) {
                jQuery('header').fadeOut();
            } else {
                jQuery('header').fadeIn();
            }
        }); 
     }
     
     if(jQuery("#header-white").length) {

         jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 10) {
                jQuery('header').css( "background", "white" );
                jQuery('header .logo > a').css( "borderBottom", "0" );

            } else {
                jQuery('header').css( "background", "none" );
            }
        }); 
     }

   
  });

}

/*-------------------------------------------
Typewriting init script
---------------------------------------------*/

function Typewriting() {


jQuery(document).ready(function(){
	setTimeout( function(){
		if(jQuery("#site-type").length) {
        jQuery(".typewrite span").typed({
            strings: ["show case ", "projects "],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
	}, 3000);
});
}


/*-------------------------------------------
Amazing Fade with scroll Sidebar
---------------------------------------------*/

function sidebarhero() {

  if(jQuery("#hero").length) {
    var fadeStart=100,fadeUntil=800,fading = jQuery('#hero');

    jQuery(window).bind('scroll', function(){
        var offset = jQuery(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
  } 
}


/*-------------------------------------------
Open Check Scription
---------------------------------------------*/

function OpenCheck() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
}


/*-------------------------------------------
Check Preloader
---------------------------------------------*/

function preloaderCheck() {
    showPreloader();
    jQuery(window).load(function() {
        hidePreloader();
    });
}

/*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

function showPreloader() {
  jQuery(".preloader").fadeIn("slow");
}

function hidePreloader() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
}



});//End