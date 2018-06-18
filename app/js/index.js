
//dropdown-menu
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

//yandex-map
ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}

// buttons active
// var buttonContainer = document.querySelectorAll('.btn-container');
// buttonContainer.forEach(function(element) {
//   element.onclick = function(e) {
//     if(e.target.tagName == 'LI') {
//       var elements = element.querySelectorAll('.btn');
//       elements.forEach(function(el) {
//         el.classList.remove('active-btn');
//       });
//       e.target.classList.add('active-btn');
//     }
//   }
// });

var buttonContainer = document.querySelectorAll('.btn-container');

for(let i = 0; i < buttonContainer.length; i++) {
  let element = buttonContainer[i];
  element.onclick = function(e) {
    if(e.target.tagName === 'LI') {
      let elements = element.querySelectorAll('.btn');
      for(let k = 0; k < elements.length; k++) {
        elements[k].classList.remove('active-btn');
      }
      e.target.classList.add('active-btn');
    }
  }
}

//scroll button

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 700);
});