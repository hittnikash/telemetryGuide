/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "20px";
}

function openOtherNav() {
  document.getElementById("myOtherSidebar").style.width = "250px";
  document.getElementById("main2").style.marginLeft = "240px";
  document.getElementById("main").style.marginLeft = "-100%"; 
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeOtherNav() {
  document.getElementById("myOtherSidebar").style.width = "0";
  document.getElementById("main2").style.marginLeft = "15px";
  document.getElementById("main").style.marginLeft = "20px"; 
}

