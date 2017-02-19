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
  duration: 150, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1") // the element we want to pin
.addTo(controller);
