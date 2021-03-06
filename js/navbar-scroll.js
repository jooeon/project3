window.onscroll = function() {scrollFunction()};

//change size and opacity of banner and logo when scrolled
//code adapted from https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "40px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 181, 229, 0.5)";
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("logo").style.top = "4px";
  } else {
    document.getElementById("navbar").style.height = "70px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 181, 229, 1)";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.top = "8px";
  }
}