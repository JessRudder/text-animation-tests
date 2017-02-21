// console.log("Loaded Text Fade")
// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// // Scene Handler
// var scene1 = new ScrollMagic.Scene({
//   triggerElement: "#pinned-trigger1", // point of execution
//   duration: $('#pinned-trigger1').height(), // pin element for the window height - 1
//   reverse: true // allows the effect to trigger when scrolled in the reverse direction
// })
// .setPin("#pinned-element1") // the element we want to pin
// .addTo(controller);

// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: $(window).height() - 475, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
  .setPin("#pinned-element1") // the element we want to pin
  .on("enter", function() {
    var $animateElem = $('.text-fade-animation');
    
    $animateElem.css('opacity', '0');
    setTimeout(function() {
      var text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      $animateElem.each(function(idx,el){
        el.innerHTML = text;
      });
      $animateElem.css('opacity','1');
    },1750)

    setTimeout(function() {
      $animateElem.removeClass('text-fade-animation')
    },3750)
  })
  .addTo(controller);


// var scene2 = new ScrollMagic.Scene({
//   triggerElement: "#anim-trigger1",
//   offset: 40,
//   duration: 300
// })
//   .addTo(controller)
$(".js--project-item").click(function(){
  var title = $(this).data("title");
  var description = $(this).data("description");
  // var tags = $(this).data("tags");
  var details = $(this).data("tags");
  openModal(title, description, details);
});

$(".js--close-modal").click(function(e){
  e.preventDefault();
  closeModal();
});

function openModal(title, description, details) {
  var modal = document.getElementsByClassName("site-overlay")[0];

  $("#project-title").text(title);
  $("#project-description").text(description);
  $("#project-tags").text(details);

  modal.style.visibility = "visible";
}

function closeModal() {
  var modal = document.getElementsByClassName("site-overlay")[0];

  modal.style.visibility = "hidden";
}

// function modalClose() {
//     if (location.hash == '#openModal') {
//         location.hash = '';
//     }
// }

// Handle ESC key (key code 27)
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});
