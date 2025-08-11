$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
      0:{ items:1 },
      576:{ items:2 },
      768:{ items:3 },
      992:{ items:4 },
      1200:{ items:5 }
    }
  });
