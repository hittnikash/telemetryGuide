
// Questions & Awnsers
 const questions = [
    {
        question: "What are the characteristics of Ventricular arrhythmias?",
        optionA: "Narrow QRS complex, No P-wave",
        optionB: "PR-Interval Changes",
        optionC: "Wide, Notched QRS Complexes, P-wave present ",
        optionD: "Wide QRS complex, Typically no P-wave",
        correctOption: "optionD"
    },

    {
        question: "What is the normal PRI?",
        optionA: "< .12 sec",
        optionB: ".12 - .20 sec",
        optionC: "> .12 sec",
        optionD: ".8 - .20 sec",
        correctOption: "optionB"
    },

    {
        question: "Atrial pacing is when the spike is - ?",
        optionA: "In front of the QRS complex",
        optionB: "After the P-wave",
        optionC: "On the QRS complex",
        optionD: "In front of the P-wave",
        correctOption: "optionD"
    },

    {
        question: "Ventricular pacing is when the spike is -",
        optionA: "After the QRS complex",
        optionB: "In front of the P-wave",
        optionC: "In front of the QRS complex",
        optionD: "On the T-wave",
        correctOption: "optionC"
    },

    {
        question: "Why are the QRS complexes wider with ventricular pacing?",
        optionA: "The impulse originates from the SA node",
        optionB: "The impulse originates from the pacer and not the AV node",
        optionC: "Bundle Branch Block",
        optionD: "The impulse originates from the pacer and not the SA node",
        correctOption: "optionD"
    },

    {
        question: "What is ventricular Tachycardia?",
        optionA: "A run of three or more consecutive PVC's",
        optionB: "A run of three or more consecutive PAC's",
        optionC: "A run of three or more consecutive PJC's",
        optionD: "Multifocal PVCs",
        correctOption: "optionA"
    },

    {
        question: "What is Atrial Tachycardia?",
        optionA: "A run of three or more consecutive PVC's",
        optionB: "A run of three or more consecutive PJC's",
        optionC: "A run of three or more consecutive PAC's",
        optionD: "Sinus Tachycardia",
        correctOption: "optionC"
    },

    {
        question: "What is the normal QRS interval?",
        optionA: ".06 - .10",
        optionB: "< .20",
        optionC: "> .20",
        optionD: ".12",
        correctOption: "optionA"
    },

    {
        question: "What is considered a normal heart rate?",
        optionA: "< 60bpm",
        optionB: "60 - 120bpm",
        optionC: "> 100bpm",
        optionD: "60-100bpm",
        correctOption: "optionD"
    },

    {
        question: "What is tachycardia?",
        optionA: "A heart rate < 60bpm",
        optionB: "A heart rate < 100bpm",
        optionC: "A heart rate > 60bpm",
        optionD: "A heart rate > 100bpm",
        correctOption: "optionD"
    },

    {
        question: "What are the characteristics of Atrial Arrhythmias?",
        optionA: "Absent or short PR interval",
        optionB: "Wide QRS complexes, P-wave present with possible morphology change",
        optionC: "Narrow QRS complexes, P-wave present with possible morphology change",
        optionD: "Hidden P-waves in the QRS",
        correctOption: "optionC"
    },

    {
        question: "On EKG grid paper -one 'big box' is equal to?",
        optionA: ".20 seconds",
        optionB: ".4 seconds",
        optionC: ".12 seconds",
        optionD: "1 millivolt (mv)",
        correctOption: "optionA"
    },


    {
        question: "What does the P-wave represent?",
        optionA: "Ventricular Depolarization",
        optionB: "Atrial Depolarization",
        optionC: "Ventricular Polarization",
        optionD: "Atrial Polarization",
        correctOption: "optionB"
    },

    {
        question: "What does the PR-interval represent?",
        optionA: "Both atrial depolarization & delay in SA node",
        optionB: ".10 seconds",
        optionC: ".12 seconds",
        optionD: "Both atrial depolarization & delay in AV node",
        correctOption: "optionD"
    },

    {
        question: "What does the R-R interval represent?",
        optionA: "Ventricular Rate",
        optionB: "Atrial Rate",
        optionC: "Letters in the alphabet",
        optionD: "Bundle Branch Block",
        correctOption: "optionA"
    },

    {
        question: "What does the P-P interval represent?",
        optionA: "Ventricular Rate ",
        optionB: ".20 seconds",
        optionC: "Atrial Rate",
        optionD: ".20 millivolt (mv)",
        correctOption: "optionC"
    },

    {
        question: "What does the QRS interval measure?",
        optionA: "The total time of ventricular depolarization",
        optionB: "Ventricular Rate",
        optionC: "The total time of atrial depolarization",
        optionD: "Atrial Rate",
        correctOption: "optionA"
    },

    {
        question: "ST-Elevation indicates _?",
        optionA: "Cell death",
        optionB: "mitosis",
        optionC: "Cell injury",
        optionD: "The J-point",
        correctOption: "optionC"
    },

    {
        question: "An electrocardiogram is a recording of the_?",
        optionA: "Opening & closing of the valves of the heart.",
        optionB: "Force of the blood against the walls of the blood vessels.",
        optionC: "Contraction & relaxation of the ventricles.",
        optionD: "Electrical activity of the heart.",
        correctOption: "optionD"
    },

    {
        question: "What does 'Amplitude' refer to?",
        optionA: "Height (voltage) of a waveform on the EKG.",
        optionB: "The sound of the monitor when it alarms.",
        optionC: "A piece of equipment that an instrument can be plugged into.",
        optionD: "Central monitor equipment",
        correctOption: "optionA"
    },

    {
        question: "What is artifact?",
        optionA: "Priceless items displayed in a museum",
        optionB: "An object made by a human being, typically an item of cultural or historical interest",
        optionC: "Something that is not naturally occuring",
        optionD: "Distortion of EKG tracing by electrical activity that is non-cardiac in origin.",
        correctOption: "optionD"
    },

    {
        question: "If the electrical conduction initiates in the SA Node the rhythm is said to be-?",
        optionA: "Ventricular",
        optionB: "Sinus",
        optionC: "Junctional",
        optionD: "Dysrhythmia",
        correctOption: "optionB"
    },

    {
        question: "The horizontal axis on EKG grid paper represents-?",
        optionA: "Amplitude",
        optionB: "Time",
        optionC: "Volume",
        optionD: "David Gilmour",
        correctOption: "optionB"
    },

    {
        question: "Which of the following electrical events will result in contraction?",
        optionA: "Polarization",
        optionB: "Repolarization",
        optionC: "Depolarization",
        optionD: "Relaxation",
        correctOption: "optionC"
    },

    {
        question: "Voltage on the EKG monitor strip is measured-?",
        optionA: "Diagon Alley",
        optionB: "Diagonally",
        optionC: "Vertically",
        optionD: "Horizontally",
        correctOption: "optionC"
    }

]

// Shuffle questions
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}





let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    // display image instead of question


    
    
}




function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Not Great, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Eh, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Great Job!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
