// Bottle brew flavor notes- toggles from hidden to visable
function modalToggleA() {
    const modalToggleA = () => {
      document.querySelector(".techModalA").classList.toggle('techModalA--hidden');
    };
      // opens flavor modal
    document.getElementById('tech-imgA').addEventListener('click', modalToggleA);
      //closes flavor modal
    document.getElementById('closeA').addEventListener('click', modalToggleA);
    }
    
    function modalToggleB() {
    const modalToggleB = () => {
      document.querySelector(".techModalB").classList.toggle('techModalB--hidden');
      };
    
    document.getElementById('tech-imgB').addEventListener('click', modalToggleB);
    document.getElementById('closeB').addEventListener('click', modalToggleB);
    }
    
    function modalToggleC() {
    const modalToggleC = () => {
      document.querySelector(".techModalC").classList.toggle('techModalC--hidden');
      };
    document.getElementById('tech-imgC').addEventListener('click', modalToggleC);
    document.getElementById('closeC').addEventListener('click', modalToggleC);
    }