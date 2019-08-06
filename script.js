const nav = document.getElementById('navbar');

const scrollHandle=()=>{
    if(nav)
    window.scrollY>25?nav.classList.add("navShadow"):nav.classList.remove("navShadow");
}

window.addEventListener("scroll",scrollHandle)

/* var interval = setInterval(function() {
          // method to be executed;
          console.log("faiz");
        }, 500); */
        $(document).ready(function(){
            $('.customer-logos').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1000,
              arrows: false,
              dots: false,
              pauseOnHover: false,
              responsive: [{
                breakpoint: 768,
                settings: {
                  slidesToShow: 4
                }
              }, {
                breakpoint: 520,
                settings: {
                  slidesToShow: 3
                }
              }]
            });
          });
      