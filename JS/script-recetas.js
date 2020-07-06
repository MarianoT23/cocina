////////////////////////////// HAMBURGER MENU

var miniNav = document.getElementById("mini-nav");
var hambBtn = document.getElementById("hamb-menu")
function hambMenu() {
    if (miniNav.style.display === "block") {
        miniNav.style.display = "none";
        hambBtn.classList.remove("open");
    } else {
        miniNav.style.display = "block";
        hambBtn.classList.add("open");
    }
};



////////////////////////////// BOTON - COMPARTIR RECETA

function compartirReceta() {
    var copyLink = window.location.href;
    var inputLink = document.createElement('input');
    document.body.appendChild(inputLink);
    inputLink.value = copyLink;
    inputLink.select();
    inputLink.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(inputLink);
    alert("Link copiado. Pegar para compartir.")
};



////////////////////////////// BOTON - RETURN TO TOP

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}