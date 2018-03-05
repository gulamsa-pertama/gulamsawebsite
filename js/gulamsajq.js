$(document).ready(function() {
  $('nav div img').click(function(){
      $('ul').slideToggle();
      $('ul ul').css('display', 'none');
  });

  $('ul li').click(function(){
      $('ul ul').slideUp();
      $(this).find('ul').slideToggle();
  });

  $(window).resize(function(){
    if($(window).width() > 500){
      $('ul').removeAttr('style');
    }
  });

});

var acc = document.getElementsByClassName("ryo-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
