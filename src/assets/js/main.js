$(document).ready(function() {
    $('.overlaytrabaja').on('click', function () {
        $('.overlaytrabaja').removeClass('active');
        $("#wrapper").toggleClass("toggled");
        $("#wrapperInterna").toggleClass("toggled");
    });
});

function flickity(){
    $('.main-gallery').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
}

function fixedNavbar(){
    window.onscroll = function(){
        let desplazamiento = window.pageYOffset;
        if(desplazamiento >= 60){
          $("#navbar-secundario").addClass('fixed-top');
        }else{
          $("#navbar-secundario").removeClass('fixed-top');
        }
    }
}
