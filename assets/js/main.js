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

  // live page
  $('.live-page-carosel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{ items:2 },
      576:{ items:2 },
      768:{ items:3 },
      992:{ items:4 }
    }
  });

  // entertainment page
  $('.entertainment-page-carosel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{ items:2 },
      576:{ items:2 },
      768:{ items:3 },
      992:{ items:3 }
    }
  });


});

// password hide/show
const passEyes = document.querySelectorAll(".passEye");

    passEyes.forEach((eye, index) => {
        eye.addEventListener("click", () => {
            const passField = eye.parentElement.querySelector(".password-field");
            const icon = eye.querySelector("i");

            if (passField.type === "password") {
                passField.type = "text";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            } else {
                passField.type = "password";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }
        });
    });





