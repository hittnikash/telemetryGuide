/***** ARRAY of OBJECTS of Equipment*****/

///Object variable named images and it's data-types.///
const images = [
    {  
        name: 'Bedside Monitor',
        about: "The monitor at each patient's bedside is referred to as the bedside monitor.<br><br>",
        photo: 'images/equipmentImages/bluredBedMT.jpg'
    },

    {
        name: "X2's & X3s",
        about: "These small devices pair to the bedside monitor. The X3 is the newer version of the X2. There is an attachment device that provides for extra ports if needed. The X2 or X3 simply slides into the attachment device.<br><br>",
        photo: 'images/equipmentImages/x2x3.png',
    },

    {
        name: "Boxes & Bricks", 
        about: 'The X2 or X3 slides and clicks into this attachment. This attachment provides xtra outlets for pressure and co2 cables.<br><br> ',
        photo: 'images/equipmentImages/boxesAndBricks.png',
    },

    {
        name: 'Accessory Boxes',
        about: 'These small FMS boxes plug into the base of the bedside monitor and provide xtra outlets for 02, pressure and Co2 cables.<br><br>',
        photo: 'images/equipmentImages/fmsBoxes.jpg',
    },

    {
        name: "Travel Monitor's" , 
        about: 'This monitor can be removed from its mobile stand. When the patient is ready to travel the X2 or X3 is removed from the bedside monitor and inserted onto the back of the travel monitor. There are also extra slots for FMS accessory boxes.<br><br>',
        photo: 'images/equipmentImages/travelMonitors.png'
    },
    {
        name: 'Tele-Packs',
        about: "<p class='gen-a'>If a patient is ambulatory and wants to go for a stroll around the unit they can be taken off the bedside monitor & monitoring can be continued with the use of a portable device called a tele-pack.</p> <p class='gen-a'>The tele-pack's like the X2's & X3's must be paired to the bedside monitor via the main telemetry station.</p><p class='gen-a'>Note that if a patient is utilizing a telepack for continuous cardiac monitoring then the RN will be unable to print trends for that patient- as trendscan only be printed from the bedside monitor.</p><br><br>",
        photo: 'images/equipmentImages/telePack.png',
    }
];

/// Foor Loop runs through each image object and displays it's information on the page.///
let html = '';

for (let i = 0; i < images.length; i ++) {
    let image = images[i];
    html += `
        <h1 class="gen-n">${image.name}</h1>
        <img class="gen-p" src="${image.photo}" alt="${image.name}">
        <p class="gen-a">${image.about}</p>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeEnd', html);