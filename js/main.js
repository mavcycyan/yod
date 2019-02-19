/**/
jQuery(document).ready(function($){	
    $(".ath").fancybox({ 
        href: '#modal_auth', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        autoScale: true
    });
    $(".fp").fancybox({ 
        href: '#modal_fp', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        autoScale: true
    });
});
/**/

/**/
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
    $('#svg_pr rect').animate({ width: 526 }, 1000, function() { });
});
/**/

/**/
/**/

/**/
/**/

/**/
/**/