/****** HAMBURGER MENU ******/ 
///The toggle() function executes when the user clicks the hamburger menu.
function toggle() {
    const menu = document.getElementById("navLinks");
///If statement: If the menu is being displayed as block element it will disappear. In all other cases it will be displayed as a block element.
        if (menu.style.display === "block") {
            menu.style.display = "none";     
        }
       else {
          menu.style.display = "block";
       }
}