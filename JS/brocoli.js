    var regresar = $("#go-top");

    $(window).scroll(function (){
        if($(window).scrollTop() > 350){
            regresar.addClass("visible");
        }else{
            regresar.removeClass("visible")
        }
    });

    regresar.on("click", function (evento) {
        evento.preventDefault();
        $("html, body").animate ({scrollTop: 0}, 300);
    })

    
    



