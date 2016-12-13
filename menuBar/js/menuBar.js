$("#bottonNavRef").click(function(){

    console.log("click");

    //validar si no existe la clase nav-block, agregarla.
    if(!$('nav').hasClass('nav-block')){
        $('nav').addClass("nav-block");
    }else{//Pero si existe, se tiene que remover
        $('nav').removeClass("nav-block");
    }

});
