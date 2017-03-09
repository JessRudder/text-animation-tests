$(".make-visible").mouseover(function(){
  $(this).css('color','black');
})

$(".button").on("click", function(){
  $('.module').css("height", '400px');
})

$(".one .module__head")
  .mouseenter(function() {
    $(this).parent().removeClass("module--cap-blue");
    $(this).parent().addClass("module--cap-red");
  })
  .mouseleave(function() {
    $(this).parent().removeClass("module--cap-red");
    $(this).parent().addClass("module--cap-blue");
  });

$(".two .module__head")
  .mouseenter(function() {
    $(this).parent().removeClass("module--cap-yellow");
    $(this).parent().addClass("module--cap-yellow-inverse");
  })
  .mouseleave(function() {
    $(this).parent().removeClass("module--cap-yellow-inverse");
    $(this).parent().addClass("module--cap-yellow");
  });

$(".three .module__head")
  .mouseenter(function() {
    $(".one").css("height", "400px");
  })
  .mouseleave(function() {
    $(".one").css("height", "auto");
  });
