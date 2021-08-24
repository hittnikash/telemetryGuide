function modalToggle() {
    const modalToggle = () => {
      document.querySelector(".Cmodal").classList.toggle('Cmodal--hidden');
      };
    document.getElementById('controlModal').addEventListener('click', modalToggle);
    document.getElementById('close').addEventListener('click', modalToggle);
    };