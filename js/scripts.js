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


  //BodyMovin

  var animation = bodymovin.loadAnimation({
      container: document.getElementById('blog1'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'04-Assets/00-Homepage/blog-animations/01/data.json'

  });