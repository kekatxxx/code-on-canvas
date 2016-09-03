
    jQuery(document).ready(function ($) {
        
        var _SlideshowTransitions = [
        //Fade
        { $Duration: 3000, $Opacity: 2 }
        ];
        
        var options = {
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2
            },
            $AutoPlay: true,
            $SlideDuration : 500,
            $AutoPlayInterval : 5000,
            $FillMode : 1,
            $SlideshowOptions:{
                $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true   
            }
            
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
        
        //responsive code begin
        //you can remove responsive code if you don't want the slider scales
        //while window resizes
        function ScaleSlider() {
            var parentWidth = $('#slider1_container').parent().width();
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
            }
            else
                window.setTimeout(ScaleSlider, 30);
        }
        //Scale slider after document ready
        ScaleSlider();
                                        
        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
        
    });
