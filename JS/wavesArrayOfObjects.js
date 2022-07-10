/***** ARRAY of OBJECTS of Waves*****/

///Object variable named images and it's data-types.///
const techImages = [
    {  
        name: 'The P-Wave',
        about:"<p>The P-wave is the first deflection and is normally a positive waveform representing atrial depolarization. Atrial depolarization is triggered by an electrical impulse from the heart's principal pacemaker, the SA Node (sino-atrial node). This impulse is what causes the contraction of the atria in your heart.<p>The P-wave shape is usually smooth & rounded and precedes the QRS complex. The normal duration is 0.06-0.11 seconds. When evaluating the P-Wave, ask yourself the following:</p><ul class= 'listrev'><li>Are they present?</li><li>Do they occur regularly?</li><li>Is there one P-wave for each QRS complex?</li><li>Are the P-Waves smooth, rounded & upright?</li><li>Do all P-Waves have similar shapes?</li></ul>",
        photo: 'resources/createdImgs/p.jpg" alt= "P-Wave'

    },
    {  
        name: 'The QRS Complex<',
        about:' <p>The QRS complex follows the P wave & represents  ventricular depolarization and contraction.</p><p>It normally begins with a downward deflection, Q; a larger upward deflection, R; and then a downward S wave.</p><br><p><b>When evaluating a QRS Complex, ask yourself the following:</b></p><ul class= "listrev"><li>Does the QRS interval fall within the range of 0.08-0.10 seconds?</li><li>Are the QRS complexes similar in appearance across the ECG tracing?</li></ul>',
        photo: 'resources/createdImgs/qrs.jpg" alt= "QRS Complex'

    },
    {  
        name: 'The T-Wave',
        about:' <p>The T wave is normally an upward waveform representing repolarization of the ventricles. It is a slightly asymmetrical waveform that follows the QRS complex. A t-wave will usually follow the same direction as the QRS complex that preceded it (positive or negative).</p><p>When a T-wave occurs in the opposite direction of the QRS complex it usually signifies some sort of cardiac pathology.</p><p><b>When evaluating the T-Wave, ask yourself the following:</b></p><ul class= "listrev"><li>Do the T waves have a downward (negative) deflection? </li><li>Are the T waves tall, with pointed peaks?</li></ul>',
        photo: 'resources/createdImgs/t.jpg" alt= "T-Wave'

    },
    {  
        name: 'The U-Wave',
        about:' <p>The U-Wave succeeds the T wave & indicates the recovery of the Purkinje conduction fibers. This wave-form may not be observable.</p>',
        photo: 'resources/createdImgs/u.jpg" alt= "U-Wave"'

    },
    {  
        name: 'Segments & Intervals:',
        about:'<p><b>Electrocardiographic Segment:</b> Line (usually isoelectric) that connects two waves without including either one of them.</p><p><b>Electrocardiographic Interval:</b> Portion of the EKG that includes a segment and one or more waves.</p>',
        photo: 'resources/createdImgs/segInter.png'

    },
    {  
        name: 'PR-Interval:',
        about:' <p>The PR-Interval indicates AV conduction time. To measure this interval- start from the beginning of the P wave until the beginning of the QRS complex.</p><p>The normal  interval is 0.12 to 0.20 seconds. This interval shortens with increased heart rate.</p><p><b>When evaluating the PRI:</b></p><ul class= "listrev"><li>Does the PR-Interval fall within the norm of 0.12-0.20 seconds?</li><li>Is the PR-Interval constant across the ECG tracing?</li></ul>',
        photo: 'resources/createdImgs/PRI.jpg" alt= "PR-Interval"'

    },
    {  
        name: 'ST-Segment:',
        about:'<p> The ST segment represents the early part of ventricular repolarization & is measured at the baseline from the end of the QRS complex to the beginning of the T wave. It is the flat isoelectric section of the EKG between the end of the S-wave and the beginning of the T-wave. </p><p>Myocardial ischemia (cell death) is indicated by ST depression while myocardial injury may be indicated by ST elevation.</p>',
        photo: 'resources/createdImgs/st-segment.jpg" alt= "St-Segment"'

    },
    {  
        name: 'J-Point:',
        about:'<p>The J-point is the junction between the end of the QRS complex and the beginning of the ST segment. With ST elevation the j-point is elevated from the baseline measured at the PR-interval. With ST depression the j-point is depressed from the baseline measured at the PR-interval.</p>',
        photo: 'images/J-point/J-point.png" alt= "J-point"'

    },
    {  
        name: 'ST- Elevation',
        about:'<br>',
        photo: 'images/J-point/st-elevation.png" alt= "ST- Elevation"'

    },
    {  
        name: 'ST-Depression',
        about:'<br>',
        photo: 'images/J-point/ST-depression.png" alt= "ST-Depression"'

    },
    {  
        name: 'QT-Interval:',
        about:'<section><p>The QT interval represents the time of ventricular activity including both depolarization and repolarization.</p><p>It is measured from the beginning of the QRS complex to the end of the T wave. The normal QT interval is .36 to 0.44 seconds (9-11 boxes). It is important to note that the QT-interval will vary with patient gender, age & heart rate.</p><p>Another guideline is that normal QT intervals are less than half of the R-R interval for heart rates below 100 bpm. </p> ',
        photo: 'resources/createdImgs/QT.jpg" alt= "QT-Interval"'

    },
    {  
        name: 'QRS-Interval',
        about:'<section><p>The QRS interval measures the total time of ventricular depolarisation. It is measured from the beginning of the Q-wave until the end of the S-wave & the normal value ranges 0.06s & 0.10s.</p>',
        photo: 'resources/createdImgs/qrs-interval.jpg" alt= "QRS-Measurement"'

    },
    {  
        name: 'R-R Interval',
        about:'<p>The R-R interval is the distance between two consecutive R waves & represents ventricular rate.</p><p>The duration of the R-R interval depends on heart rate. In sinus rhythm this interval should be constant.</p><p>The R-R is measured from the beginning of an R-wave to the beginning of the next R-wave.</p>',
        photo: 'resources/createdImgs/r-r.jpg" alt= "R-R interval"'

    },
    {  
        name: 'P-P Interval',
        about:'<p>The P-P interval is the distance between two consecutive P waves & represents atrial rate. The duration of the P-P interval depends on heart rate.</p><p>In sinus rhythm this interval should be constant. The P-P is measured from the beginning of an P-wave to the beginning of the next P-wave.</p>',
        photo: 'resources/createdImgs/p-p.jpg" alt= "R-R interval"'
    },
    
];

/// Foor Loop runs through each image object and displays it's information on the page.///
let html = '';

for (let i = 0; i < techImages.length; i ++) {
    let techImage = techImages[i];
    html += `
        <h1 class="gen-n">${techImage.name}</h1>
        <img class="gen-p" src="${techImage.photo}" alt="${techImage.name}">
        <p class="gen-a"><section>${techImage.about}</p></section><br>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeEnd', html);