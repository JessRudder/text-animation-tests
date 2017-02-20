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
  duration: $(window).height(), // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
  .setPin("#pinned-element1") // the element we want to pin
  .addTo(controller);

var animateElem = document.getElementsByClassName("text-fade-animation");

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#anim-trigger1",
  offset: 40,
  duration: 300
})
  .on("enter", function() {
    [].forEach.call(animateElem, function (el) {
        // debugger;
        el.style.opacity = 0;
    });
    

  })
  .on("leave", function() {
    [].forEach.call(animateElem, function (el) {
        el.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        el.style.opacity = 1;
        setTimeout(function() {
          el.classList.remove("text-fade-animation")
        }.bind(null,el),2000);
    });
  })
  .addTo(controller)
