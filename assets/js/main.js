$(document).ready(function(){
  // Home Page Carosel
  $('.streaming-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
      0:{ items:2 },
      576:{ items:2 },
      768:{ items:3 },
      992:{ items:4 },
      1200:{ items:5 }
    }
  });

  $('.nostalgia-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
      0:{ items:2 },
      576:{ items:2 },
      768:{ items:4 },
      992:{ items:5 },
      1200:{ items:6 }
    }
  });
});


