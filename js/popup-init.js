jQuery(document).ready(function() {
    jQuery('.test-popup-gallery').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
            return item.el.attr('title') + '<small>Giuliano Ghelli</small>';
            }
        }
    });
});