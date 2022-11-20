var modal = document.getElementById("fondoModal");
var boton = document.getElementById("link");
var span = document.getElementsByClassName("cerrar")[0];

boton.onclick = function()
{
  modal.style.display = "block";
}

span.onclick = function()
{
  modal.style.display = "none";
}

let topButton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}