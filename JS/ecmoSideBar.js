/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebarEC").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebarEC").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function openOtherNav() {
    document.getElementById("myOtherSidebarEC").style.width = "100%";
    document.getElementById("main2").style.marginLeft = "250px";
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeOtherNav() {
    document.getElementById("myOtherSidebarEC").style.width = "0";
    document.getElementById("main2").style.marginLeft = "0px";
    
  }