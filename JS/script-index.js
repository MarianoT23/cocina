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

