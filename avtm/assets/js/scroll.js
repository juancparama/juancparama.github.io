window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "80px";
  }
} 
