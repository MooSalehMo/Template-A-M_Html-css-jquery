/*global document*/

var myNav  = document.getElementById("navbar"),
    myLoadOverlay = document.getElementById("loading-overlay"),
    mySpinner = document.getElementById("spinner"),
    myUp = document.getElementById("scrolltop");

// navbar background onscroll & scrolltop
window.onscroll = function () {
   "use strict";
    // navbar background onscroll
    if (window.pageYOffset >= 30 & window.pageXOffset <= 1000) {
        myNav.style.backgroundColor = "#535353";
  
    } else {
            myNav.style.backgroundColor = "transparent";
    }   
    
    // scrolltop

    if (window.pageYOffset >= 500) {
        myUp.style.display = "block";
        myUp.onclick = function () {
            window.scrollTo(0, 0);
        }
    }  else{
        myUp.style.display = "none";
    }
 
};




// clockk
function showTime() {
    "use strict";
    var now = new Date(),
    clockHours = now.getHours(),
    clockMinutes = now.getMinutes(),
    clockSeconds = now.getSeconds();
    
  if (clockHours < 10) {
      clockHours = "0" + clockHours;
  }
        
    if (clockMinutes < 10 ) {
      clockMinutes = "0" + clockMinutes;
  }
    
    if (clockSeconds < 10) {
      clockSeconds = "0" + clockSeconds;
  }

    
document.getElementById("clockk").textContent = clockHours + ":" + clockMinutes + ":" + clockSeconds ;
    
};

window.onload = function () {
    "use strict";
    
    // loading-overlay
    mySpinner.style.display = "none";
    document.body.style.overflow = "auto";
    setTimeout(function () {
        myLoadOverlay.style.display = "none";
    }, 500);
    
    // clockk
    setInterval(showTime, 500);
    
};
