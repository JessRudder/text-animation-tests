var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1",
  duration: $(window).height(),
  triggerHook: 0,
  reverse: false
})
  .on("enter", function() {
    disableScrolling();
    var $animateElem = $('.fade-animation');
    
    setTimeout(function() {
      $animateElem.css('opacity', '0');
    }, 2000)
    

    setTimeout(function() {
      updateParagraph($animateElem);
    },3750)

    setTimeout(function() {
      $animateElem.removeClass('fade-animation')
      document.getElementById("pinned-trigger1").removeAttribute("id");
      enableScrolling();
    },5750)
  })
  .addTo(controller);

function updateParagraph(animateElem) {
  var newName = "Jessica";
  var newSaw = "sees";
  var newCareer = "cod";
  var newPronoun = "She";
  var newEnding = "s";
  var newGenetive = "her";
  var newCurve = "method";
  var newReveal = "improving";
  var newPhrase = "performance of the code base";
  var newFields = "server architecture and statistics";
  var newPuts = "is putting";
  var newMaster = "great engineer";


  $(".name").each(function(idx,el){
    el.innerHTML = newName;
  });

  $(".career").each(function(idx,el){
    el.innerHTML = newCareer;
  });

  $(".pronoun").each(function(idx,el){
    el.innerHTML = newPronoun;
  });

  $(".ending").each(function(idx,el){
    el.innerHTML = newEnding;
  });

  $(".genetive").each(function(idx,el){
    el.innerHTML = newGenetive;
  });

  $(".saw").text(newSaw);
  $(".curve").text(newCurve);
  $(".reveal").text(newReveal);
  $(".phrase").text(newPhrase);
  $(".puts").text(newPuts);
  $(".master").text(newMaster);
  $(".related-fields").text(newFields);

  
  $(".js--image-start").css('display','none');
  $(".js--image-finish").css('display','inline');
  
  animateElem.css('opacity','1');
}

$(".js--project-item").click(function(){
  var title = $(this).data("title");
  var description = $(this).data("description");
  var details = $(this).data("tags");
  var icon = $(this).data("icon");

  openModal(title, description, details, icon);
});

$(".js--close-modal").click(function(e){
  e.preventDefault();
  closeModal();
});

function openModal(title, description, details, icon) {
  var modal = document.getElementsByClassName("site-overlay")[0];
  var icon = "/assets/michelangelo-icon-" + icon + ".png"

  $("#project-title").text(title);
  $("#project-description").text(description);
  $("#project-tags").text(details);
  $(".project-icon").attr("src", icon);

  modal.style.visibility = "visible";
}

function closeModal() {
  var modal = document.getElementsByClassName("site-overlay")[0];

  modal.style.visibility = "hidden";
}

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
