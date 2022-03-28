$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbare').addClass("sticky");
        }else{
            $('.navbare').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     
    //  ..... slid up =====>
    $('scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //....... toggle menu/navbare script====>
    $('.menu-btn').click(function(){
        $('.navbare .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation ====>
    var typed = new Typed(".typing-2",{
           strings: ["Developpeuse","Infographiste"],
           typeSpeed: 100,
           backSpeed: 60,
           loop:true
    });

    var typed = new Typed(".typing",{
        strings: ["Developpeuse","Infographiste"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
 });


    //...... owl carousel Script ====>
     $('.carousel').owlCarousel({
         margin: 20,
         loop: true,
         autoplayTimeOut:2000,
         autoplayHoverPause: true,
         responsive: {
             0:{
                items: 1,
                nav:false
             },
            600:{
                items: 2,
                nav:false
            },
       
            1000:{
               items: 3,
               nav:false
            },
         }
      });
   });