// header sticky
const header = document.querySelector(".header-sec");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 10) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// =====things001 slider
$(".tesimonial-area").owlCarousel({
  dots: false,
  nav:true,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>'
],
  margin:0,
  responsiveClass:true,
  autoplay:false,
  autoplaySpeed: 4000,
  smartSpeed: 1500,
  slideSpeed: 4000,
  loop:true,
  items:1,
  responsive:{
    0:{
      items:1
    },
    300:{
      items:1
    },
    480:{
      items:1
    },
    600:{
      items:1
    },
    900:{
      items:1
    }
  }
}); 


  // =====things001 slider
  $(".teams-main").owlCarousel({
    dots: false,
    nav:false,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
  ],
    margin:30,
    responsiveClass:true,
    autoplay:true,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    slideSpeed: 1000,
    loop:true,
    items:3,
    responsive:{
      0:{
        items:1
      },
      300:{
        items:1
      },
      480:{
        items:1
      },
      600:{
        items:2
      },
      900:{
        items:3
      }
    }
  }); 

    // =====things001 slider
    $(".featured-slide").owlCarousel({
      dots: false,
      nav:true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
      margin:0,
      responsiveClass:true,
      autoplay:true,
      autoplaySpeed: 1000,
      smartSpeed: 1000,
      slideSpeed: 1000,
      loop:true,
      items:1,
      responsive:{
        0:{
          items:1
        },
        300:{
          items:1
        },
        480:{
          items:1
        },
        600:{
          items:1
        },
        900:{
          items:1
        }
      }
    }); 

  document.addEventListener("mousemove", function(event) {
    const x = event.pageX - 10;
    const y = event.pageY - 10;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  
  $('.text').on("mouseover", function(){
    $('#cursor').css({'transform': 'scale(5.5)'});
  });
  
  $('.text').on("mouseleave", function(){
    $('#cursor').css({'transform': 'scale(1)'});
  });
  
  $('.btn').on("mouseover", function(){
    $('#cursor').css({'opacity': '0'});
  });

  $('.btn').on("mouseleave", function(){
    $('#cursor').css({'opacity': '1'});
  });



// mobile menus area

$(".menu-bar").on('click', function() {
  $(".main-navigation").addClass('main-navigation-open');
});
$(".menu-close").on('click', function() {
  $(".main-navigation").removeClass('main-navigation-open');
}); 

$(".menu-close").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});


$('.acnav__label').click(function () {
	var label = $(this);
	var parent = label.parent('.has-children');
	var list = label.siblings('.acnav__list');

	if ( parent.hasClass('is-open') ) {
		list.slideUp('fast');
		parent.removeClass('is-open');
	}
	else {
		list.slideDown('fast');
		parent.addClass('is-open');
	}
});


// video popup
$(".play-btn").on('click', function() {
  $(".video-popup").addClass('video-popup-open');
});
$(".close-video").on('click', function() {
  $(".video-popup").removeClass('video-popup-open');
}); 

// enquire now
$(".enquery-fixed-btn").on('click', function() {
  $(".enquery-area").addClass('enquery-area-open');
});
$(".enquery-close").on('click', function() {
  $(".enquery-area").removeClass('enquery-area-open');
}); 

var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}


$('.banner-sec').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});


/* FadeIn Scroll */
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.fade').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},900);
                  
          }
          
      }); 
  
  });
  
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".anime p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".anime",
    // markers: false,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  }
});


$('.select-dropdown__button').on('click', function(){
	$('.select-dropdown__list').toggleClass('active');
});
$('.select-dropdown__list-item').on('click', function(){
	var itemValue = $(this).data('value');
	console.log(itemValue);
	$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	$('.select-dropdown__list').toggleClass('active');
});


