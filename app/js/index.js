
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

//buttons
var buttonContainer = document.querySelector('.btn-container');
buttonContainer.onclick = function(e) {
  console.log(e.target.tagName);
  if(e.target.tagName == 'LI') {
    var elements = buttonContainer.querySelectorAll('.btn');
    elements.forEach(function(el) {
      el.classList.remove('active-btn');
    });
    e.target.classList.add('active-btn');
  }
}