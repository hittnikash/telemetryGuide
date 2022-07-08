/***** ARRAY of OBJECTS of Tech Support*****/

///Object variable named images and it's data-types.///
const techImages = [
    {  
        name: 'Bedside Monitor<br> Not Displaying',
        about: '<p class= "gen-a">In the image above you can see the central monitor is not displaying patient vitals. However the X3 is displaying patient data.</p><p class= "gen-a"> There are two possible solutions to this technical issues. The first one is to ensure that the X3 is plugged in properly. If the X3 is plugged in & patient data is still not displaying properly, move on to the next step.</p> <img id= "techSupport" src="images/TS-images/vitalsDisplay.png" alt= "plug" width="80%"><p>The next solution is also simple. Make sure this cable is plugged in.</p><p>If you attempted both solutions and the monitor is still not displaying data it is possible that the cable shown in the second solution has gone bad. If that is the case contact biomed.</p>',
        photo: 'images/TS-images/unplugged.jpg'

    },

    {
        name: "Central Monitor<br>Not Displaying",
        about: "<p>So the patient vitals are displayed on the bedside monitor but not the central monitor. First check and make sure that your X2/X3 is plugged in properly on the bedside monitor.</p><p> If the above solution doesn't solve the problem then check to ensure that the ethernet cable (orange cable) is plugged into the back of the monitor but also into the outlet on the wall behind the monitor. If everything is plugged in properly the cable may be faulty. Contact biomed.</p>",
        photo: 'images/TS-images/ether.png',
    },

    {
        name: "5-Lead Displaying<br> as 3-Lead", 
        about: '<p>The patient is on a 5-lead, but the monitor is only displaying as a 3-lead. There are a few different things you can do to troubleshoot. First ensure the patient is using the correct lead setup with the correct electrodes. If the issue persists the next steps involve replacing equipment until the faulty piece is found. Replace each piece in this order: </p><ol class= "listrev"> <li>EKG Cable</li><li>Piink adaptor (if applicable)</li><li>X2/X3</li><li>Lead setup <br>(if it was not replaced in the initial troubleshooting, sometimes a wire breaks in the setup.)</li></ol><p>If you are unable to solve the issue contact biomed.</p>',
        photo: 'editedTeleHowTos/3Lead.jpg',
    },

    {
        name: '3-Lead Displaying<br> as 5-Lead',
        about: '<p>The patient is on a 3-lead, but the monitor is displaying as a 5-lead. First ensure the patient is using the correct lead setup with the correct electrodes. If the patient was previously on a 5-lead the electrodes have to be changed out when switched to a 3-lead. </p> <p>If the issue persists the next step is to try and reset the patient profile- which must be done at bedside.</p>',
        photo: 'editedTeleHowTos/5-lead.png',
    },

    {
        name: 'Vitals Not <br>Transferring To Epic'  , 
        about: '<p> <img id= "techSupport" src="editedTeleHowTos/hideData2.jpg" alt= "hide device tab" width="100%"></p><p>Vitals are not crossing over into Epic. First ask the RN to make sure the box labeled “hide vitals” is not checked at the top of the patient’s chart in Epic. If that does not solve the issue follow the next steps. Ask the R.N if she is the only one experiencing this issue. Sometimes there are technical issues with Epic and our network that prevent data transferring- so this may be an IT issue (helpdesk).</p><p>If no one else is experiencing this issue, have the R.N get the X2 or X3 number and ensure the equipment is “paired” correctly.</p><p>If the patient had OR in their room or went to OR and then returned to their room, make sure the patient has been "pulled" back to their room in Epic. </p><p>Lastly if the patient came in as a trauma through the E.D that could impact how data is transferred. The R.N would need to contact the E.D to get the problem solved. </p>',

        photo: 'editedTeleHowTos/hideDeviceID.jpg',
    },
    {
        name: 'Monitor Alarming<br> Check Patient I.D',
        about: '<p>The monitor may alarm when there are conflicts with patient I.D.</p><p>To clear this alarm select "Manage Patient". Next look at the equipment paired to the bedside monitor. Confirm the X2 or X3 number with the nurse at bedside. If the number does not match, remove the device that is paired using the arrows and add the correct x2 or x3- again using the arrows. Once this is done ask the nurse to unplug the X2 or X3 from the bedside monitor and plug back in. This will clear the alarm.</p><p>If the X2 or X3 is intially paired correctly then just have the nurse unplug the X2 or X3 from the bedside monitor and plug back in to clear the alarm.</p>',
        photo: 'editedTeleHowTos/checkID.jpg',
    },
    {
        name: 'Patient On Tele-Pack 02<br> Waveform Not Displaying',
        about: '<p>Sometimes when you put a patient on a Tele-Pack the o2 waveform stops displaying. </p><p>When this happens select "Measurements", next select "SpO2" in the far left column. Then you should see two options on the far right under SpO2, this should be the tele-pack number and the bedside number. Select the tele-pack number. Next select "Mode" and choose the option "continous". </p><p>Now the pleth will display on the central monitor for the patient hooked up to the tele-pack. In this example the patients sat probe was off.</p> ',
        photo: 'editedTeleHowTos/sp02Mode.png',
    },
    {
        name: 'Monitor Alarm<bR> No Data Tele',
        about: "<p>You may see this alarm becuase there are multiple devices paired to the bedside monitor.</p><p>To clear this alarm select 'Manage Patient' Next look at the devices paired and remove the the unnecessary devices using the arrows. The ICU's use X2s & X3s so you may need to contact the nurse to find out which one is in the room.</p>",
        photo: 'editedTeleHowTos/noDataTeleError.png',
    },
    {
        name: 'Monitor Alarm<br> Check Sync-Out Cable',
        about: '<p>First check the cable connections in the back of the monitor to ensure each are plugged in correctly.</p><p>With this particular alarm I have found that it is usually the cable in the image below. What I ended up doing that cleared the alarm was taking this cable from another monitor not in use and using it as a replacement. Then I put in a biomed request for the monitor with the faulty cable.</p><img id= "techSupport" src="editedTeleHowTos/plug1.jpg" alt= "faulty cable" width="70%"><p>However this should not be practiced routinely. If you get this error just double check your cable connections and contact biomed.</p>',
        photo: 'editedTeleHowTos/syncOutCable.jpg',
    },
    {
        name: 'Check FMS Module',
        about: '<p>You may see a check FMS module or check equipment alarm. As always ensure each cable and accesssory are plugged in properly.</p><p>The FMS refers to the boxes in the image below. Start by unplugging them one by one utill you find the faulty equipment. You will know because once unplugged the alarm will clear.</p><p> If the alarm reads "Check Equipment" this means any device attached could be causing the alarm. Dont forget to check the bricks that attach to the X2s and X3s. It is easy to forget to check them because they are attached to the X2s & X3s but they could also be faulty.</p>',
        photo: 'images/equipmentImages/fmsBoxes.jpg',
    }
];

/// Foor Loop runs through each image object and displays it's information on the page.///
let html = '';

for (let i = 0; i < techImages.length; i ++) {
    let techImage = techImages[i];
    html += `
        <h1 class="gen-n">${techImage.name}</h1>
        <img class="gen-p" src="${techImage.photo}" alt="${techImage.name}">
        <p class="gen-a">${techImage.about}</p>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeEnd', html);