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
    $(".mn").fancybox({ 
        href: '#modal_mn', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        autoScale: true
    });
});
/**/

/**/

    $('.h-menu a').click(function(e){
        var link = $(this).attr('href');
        if(link.indexOf('#') == -1){
            e.preventDefault();
            $('#post_prldr').fadeIn();
            setTimeout(function(){location = link}, 1500);        
        }
    });
    $('.modal_auth-menu a').click(function(e){
        var link = $(this).attr('href');
        if(link.indexOf('#') == -1){
            e.preventDefault();
            $('#post_prldr').fadeIn();
            setTimeout(function(){location = link}, 1500);        
        }
    });
    $('.f-menu a').click(function(e){
        var link = $(this).attr('href');
        if(link.indexOf('#') == -1){
            e.preventDefault();
            $('#post_prldr').fadeIn();
            setTimeout(function(){location = link}, 1500);        
        }
    });
    $('.h-logo').click(function(e){
        var link = $(this).attr('href');
        if(link.indexOf('#') == -1){
            e.preventDefault();
            $('#post_prldr').fadeIn();
            setTimeout(function(){location = link}, 1500);        
        }
    });
    $('.h-mob-logo').click(function(e){
        var link = $(this).attr('href');
        if(link.indexOf('#') == -1){
            e.preventDefault();
            $('#post_prldr').fadeIn();
            setTimeout(function(){location = link}, 1500);        
        }
    });
/**/

/**/
$(window).on('load', function () {
    var $preloader2 = $('#p_prldr2');
    $preloader2.delay(1000).fadeOut('slow');
}); 
/**/

/**/

/**/

/**/
/**/