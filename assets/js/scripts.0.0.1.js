/*****************************************************/
/*** custom script for this project ***/
/*****************************************************/


$('.main-slider .owl-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  items: 1,
  margin: 0,
  nav: true,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ]

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


$("a[rel^='prettyPhoto']").prettyPhoto({
  social_tools: !1
});


$('.home-projects .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

$('.ch-projects .owl-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  items: 1,
  margin: 0,
  nav: true,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ]

});


$('.works-carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1.3
    },
    600: {
      items: 3
    },
    1000: {
      items: 3.5
    }
  }
});


$('.branchs .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});


/*-----------------------------------------------------------------------------------*/
/*	GO TO TOP
/*-----------------------------------------------------------------------------------*/
! function (a, b, c) {
  a.fn.scrollUp = function (b) {
    a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
  }, a.fn.scrollUp.init = function (d) {
    var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
      f = e.scrollTitle ? e.scrollTitle : e.scrollText,
      g = a("<a/>", {
        id: e.scrollName,
        href: "#top",
        title: f
      }).appendTo("body");
    e.scrollImg || g.html(e.scrollText), g.css({
      display: "none",
      position: "fixed",
      zIndex: e.zIndex
    }), e.activeOverlay && a("<div/>", {
      id: e.scrollName + "-active"
    }).css({
      position: "absolute",
      top: e.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + e.activeOverlay,
      zIndex: e.zIndex
    }).appendTo("body"), scrollEvent = a(b).scroll(function () {
      switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
        case "fade":
          a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
          break;
        case "slide":
          a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
          break;
        default:
          a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
      }
    }), g.click(function (b) {
      b.preventDefault(), a("html, body").animate({
        scrollTop: 0
      }, e.topSpeed, e.easingType)
    })
  }, a.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, a.fn.scrollUp.destroy = function (d) {
    a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
  }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(document).ready(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    scrollDistance: 300, // Distance from top/bottom before showing element (px)
    scrollFrom: 'top', // 'top' or 'bottom'
    scrollSpeed: 300, // Speed back to top (ms)
    easingType: 'linear', // Scroll to top easing (see http://easings.net/)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
    scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
    scrollImg: false, // Set true to use image
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 1001 // Z-Index for the overlay
  });
});


// $(document).ready(function(){
//   $('#search').on('click', function(e){
//     e.preventDefault();
//     $(".search-box").toggle('fast');
//   })
// })

var searchButton = document.querySelector("#search");
var closeButton = document.querySelector("#close");
var searchBox = document.querySelector(".search-box");
searchButton.addEventListener('click', (e)=>{
  e.preventDefault();
  searchBox.style.display="block";
})

closeButton.addEventListener('click', ()=>{
  searchBox.style.display="none";
})