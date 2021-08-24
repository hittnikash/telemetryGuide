const drop = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggles between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}