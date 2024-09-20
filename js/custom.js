
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
  margin:30,
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
      items:2
    },
    900:{
      items:3
    }
  }
}); 


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


window.onload = function() {
  document.getElementById('button-load').onclick = function() {
    document.getElementById('modalOverlay').style.display = 'none'
  };
};


