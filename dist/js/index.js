function init(){myMap=new ymaps.Map("map",{center:[55.76,37.64],zoom:7})}$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu li").click(function(){$(this).parents(".dropdown").find("span").text($(this).text()),$(this).parents(".dropdown").find("input").attr("value",$(this).attr("id"))}),ymaps.ready(init);var myMap,buttonContainer=document.querySelector(".btn-container");buttonContainer.onclick=function(t){if(console.log(t.target.tagName),"LI"==t.target.tagName){buttonContainer.querySelectorAll(".btn").forEach(function(t){t.classList.remove("active-btn")}),t.target.classList.add("active-btn")}};