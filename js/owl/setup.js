$('.owl-carousel').owlCarousel({
    loop:true, /*efeito de loop no carrossel*/
    margin:10, /*margem entre caixas*/
    nav:false, /*botões de navegação*/
    responsive:{
        0:{
            items:1 /*inclui 1 item telas próximas a 0px*/
        },
        600:{
            items:3 /*inclui 3 itens para telas <= 600px*/
        },
        1000:{
            items:5 /*inclui 5 itens para telas >= 1000 px*/
        }
    }
})