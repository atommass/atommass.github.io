//SCROLL TO TOP
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// START OF STYLED LIST
function _class(name){
    return document.getElementsByClassName(name);
  }
  
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
  
  for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
    });
  }

//   END OF STYLED LIST

// SMOOTH SCROLL
function scrollFunction1() {
  let e = document.getElementById("about");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}
function scrollFunction2() {
  let e = document.getElementById("experience");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center'
  });
}
function scrollFunction3() {
  let e = document.getElementById("work");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}
function scrollFunction4() {
  let e = document.getElementById("education");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}
function scrollFunction5() {
  let e = document.getElementById("contact");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

// TIME CONTAINER

const timeContainer = document.getElementById("time-container");

var startDate = new Date("Sep 1, 2022 00:00:00").getTime();

var timer = setInterval(function(){
  
  var now = new Date().getTime();
  var difference = now - startDate;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  timeContainer.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

}, 1000);

