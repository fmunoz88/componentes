/* Función que al mover el scroll reconoce el width y si es menor a 991 no acta la clase de fixed-nav */

$(window).bind('scroll', function() {
    // if($(window).width() > 767){
    
        var navHeight = $( window ).height() - 72; //Altura en pixeles del navBar más 2 pixeles para compensar el desfase

        if ($(window).scrollTop() > navHeight) { //Abajo
            $('nav').addClass('nav-fixed');
        }
        else { //Arriba
            $('nav').removeClass('nav-fixed');
        }
    // }else{
    //     $('nav').removeClass('nav-fixed');
    // }
});