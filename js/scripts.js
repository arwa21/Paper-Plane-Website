$(document).ready(function(){
    $(".dropdown, .btn-group").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     

   AOS.init();


   $(".col-links").hover(function() {
    $(this).stop().animate({"border-color": "#999999"}, "slow");
   },
  function() {
    $(this).stop().animate({"border-color": "#BFBFBF"}, "slow");
  });