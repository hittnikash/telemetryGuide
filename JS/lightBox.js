 /// LIGHTBOX ///
 const lightbox = document.createElement('div');
 lightbox.id = 'lightbox';
 document.body.appendChild(lightbox);
 
 /// To click on an image ///
 const images = document.querySelectorAll('img');
 
 images.forEach(image => {
     image.addEventListener('click', e => {
         lightbox.classList.add('active');
         const img = document.createElement('img');
         img.src = image.src;
 
  /// To remove the xtra images from lightbox ///
         while (lightbox.firstChild) {
             lightbox.removeChild(lightbox.firstChild);
         }
          lightbox.appendChild(img);
     });
 });
 
 /// To click off an image and hide the lightbox ///
 lightbox.addEventListener('click', e => {
     if (e.target !== e.currentTarget) return;
     lightbox.classList.remove('active');
 
 });