 // ---- top timer ----
 function makeTimer() {

    var endTime = new Date("22 March 2025 10:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

 }

 setInterval(function () { makeTimer(); }, 1000);

// ----- hide top header sales ----
   $(document).ready(function () {

    $(".cross_headbtn").click(function () {
       $(".header_ontop").hide();
    });
 }
 )

// language and location selector ----
     function custom_template(obj) {
      var data = $(obj.element).data();
      var text = $(obj.element).text();
      if (data && data['img_src']) {
         img_src = data['img_src'];
         template = $("<div><img src=\"" + img_src + "\" /><p style=\"text-align:center;\">" + text + "</p></div>");
         return template;
      }
   }
   var options = {
      'templateSelection': custom_template,
      'templateResult': custom_template,
   }
   $('.id_select2_example').select2(options);


// dry fruit section tabs ------
       
        $("document").ready(function(){
         $(".tab-slider--body").hide();
         $(".tab-slider--body:first").show();
       });
       
       $(".tab-slider--nav li").click(function() {
         $(".tab-slider--body").hide();
         var activeTab = $(this).attr("rel");
         $("#"+activeTab).fadeIn();
          if($(this).attr("rel") == "tab2"){
             $('.tab-slider--tabs').addClass('slide');
          }else{
             $('.tab-slider--tabs').removeClass('slide');
          }
         $(".tab-slider--nav li").removeClass("active");
         $(this).addClass("active");
       });


// recently-slider icons scroller -----
      $(".recently-slider").owlCarousel({
         loop: false,
         margin: 0,
         autoplay: false,
         nav: false,
         dots: true,
         items: 7,

      });


   // special product clients slider 
   $(".special_productslider").owlCarousel({
      loop: false,
      margin: 0,
      autoplay: false,
      nav: false,
      dots: true,
      items: 1,

   });

    
// moust popular food scrooler ----- half slider
 
$(".most_popular_owlcarosol").owlCarousel({
   loop: true,
   margin: 0,
   autoplay: false,
   nav: true,
   dots: false,
   items: 5,
   navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965">   <path id="fi-rr-angle-small-right" d="M9.986,9.879l4.589-4.586a1,1,0,0,1,1.411,1.414L11.4,11.293a1,1,0,0,0,0,1.414l4.586,4.586a1,1,0,1,1-1.415,1.414L9.986,14.121A3,3,0,0,1,9.986,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/> </svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965"><path id="fi-rr-angle-small-right" d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,1,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/></svg>',
   ],
   
responsive: {
0: {
  items: 1,
},
400: {
  items: 1.4,
},
767:{
   items:3
},
890:{
   items:4
},
1000: {
  items: 4,
},
1400: {
  items: 5,
},
3200:{
   items: 7
}
}

});


// new arrival scroller ----- half slider
$(".new_arrivalcrosol").owlCarousel({
   loop: true,
   margin: 0,
   autoplay: false,
   nav: true,
   dots: false,
 
   spaceBetween: 15,
   gap: 20,
   navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965">   <path id="fi-rr-angle-small-right" d="M9.986,9.879l4.589-4.586a1,1,0,0,1,1.411,1.414L11.4,11.293a1,1,0,0,0,0,1.414l4.586,4.586a1,1,0,1,1-1.415,1.414L9.986,14.121A3,3,0,0,1,9.986,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/> </svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965"><path id="fi-rr-angle-small-right" d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,1,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/></svg>',
   ],
   responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1.4,
      },
      750:{
         items:2
      },
      890:{
         items:2
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },

});

// dry fruits scroller ----- half slider
$(".dryfruit_slidercaro").owlCarousel({
   loop: true,
   margin: 0,
   autoplay: false,
   nav: true,
   dots: false,
 
   spaceBetween: 15,
   gap: 20,
   navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965">   <path id="fi-rr-angle-small-right" d="M9.986,9.879l4.589-4.586a1,1,0,0,1,1.411,1.414L11.4,11.293a1,1,0,0,0,0,1.414l4.586,4.586a1,1,0,1,1-1.415,1.414L9.986,14.121A3,3,0,0,1,9.986,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/> </svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965"><path id="fi-rr-angle-small-right" d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,1,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/></svg>',
   ],
   responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      750:{
         items:3
      },
      890:{
         items:3
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },

    },

});

// --------------
 

// ---- spce right at half scroller swiper ----
jQuery(document).ready(function($){
   //Dynamic Padding
   function my_dynPad() {
     var marLeft = $(".container").css("margin-left");
     var pad_left = $(".container").css("padding-left");
     marLeft = parseInt(marLeft);
     pad_left = parseInt(pad_left);
     var dyn_space = marLeft + pad_left;
     dyn_space = dyn_space + "px";
     $(".dynamic_paddingright").css("padding-right", dyn_space);
   }
   my_dynPad();
   $(window).resize(my_dynPad);
       
});

$(".owl-nav").addClass("dynamic_paddingright")

// trending products  slider 
   $(".trending_carosol").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: false,
      nav: true,
      dots: false,
      items: 5,
      navText: [
         '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965">   <path id="fi-rr-angle-small-right" d="M9.986,9.879l4.589-4.586a1,1,0,0,1,1.411,1.414L11.4,11.293a1,1,0,0,0,0,1.414l4.586,4.586a1,1,0,1,1-1.415,1.414L9.986,14.121A3,3,0,0,1,9.986,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/> </svg>',
         '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965"><path id="fi-rr-angle-small-right" d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,1,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/></svg>',
      ],
      
  responsive: {
   0: {
     items: 1,
   },
   380: {
     items: 2,
   },
   750:{
      items:3
   },
   890:{
      items:4
   },
   1000: {
     items: 5,
   },
   1400: {
     items: 5,
   },
 },

   });


// ---- spce right at half scroller swiper ----
   jQuery(document).ready(function($){
      //Dynamic Padding
      function my_dynPad() {
        var marLeft = $(".container").css("margin-left");
        var pad_left = $(".container").css("padding-left");
        marLeft = parseInt(marLeft);
        pad_left = parseInt(pad_left);
        var dyn_space = marLeft + pad_left;
        dyn_space = dyn_space + "px";
        $(".dynamic_left").css("padding-left", dyn_space);
        $(".dynamic_marginleft").css("margin-left", dyn_space);
      }
      my_dynPad();
      $(window).resize(my_dynPad);
          
  });


// headre sticky -----
$(document).on("scroll", function () {
   if ($(window).scrollTop() >= 100) {
     $(".header-bottom-wrapper").addClass(
       "header-sticky_new animate__animated animate__fadeIn"
     );
   } else {
     $(".header-bottom-wrapper").removeClass(
       "header-sticky_new animate__animated animate__fadeIn"
     );
   }
 });

// -- double side range scroller --

// double range progress bar 
let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {     
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;        
      } else {
        rangeInput[1].value = minRange + rangeMin;        
      }
      // $('#two').text('jhfjkhgkg')
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      $('#show_minvalue').text(minRange);
      $('#show_maxvalue').text(maxRange);
    }
  });
});

// rangePrice.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     let minPrice = rangePrice[0].value;
//     let maxPrice = rangePrice[1].value;
//     if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
//       if (e.target.className === "min") {
//         rangeInput[0].value = minPrice;
//         range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//       } else {
//         rangeInput[1].value = maxPrice;
//         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//       }
//     }
//   });
// });

// --------- double side range scroller end ------------



//---------  new discount aerotise slider 
$(".discount_mostpopular_slider").owlCarousel({
   loop: false,
   margin: 20,
   autoplay: false,
   nav: false,
   dots: false,
   items: 5,
responsive: {
0: {
  items: 1.2,
},
380: {
  items: 2,
},
750:{
   items:2
},
890:{
   items:3
},
1000: {
  items: 3,
},
1400: {
  items: 3,
},
},

});

     
// Video Section
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});

  
