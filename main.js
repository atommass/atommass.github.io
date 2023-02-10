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