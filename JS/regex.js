
const rr = document.getElementById("heartRate");
const calcResult = document.getElementById("HR-Result");
document.getElementById("HRbtn").onclick = calcHR;


// ABV Calculator
function calcHR() {
  const x = (60 / rr.value);
  calcResult.innerHTML = "<h1>HR=   <h1>"  +  x.toFixed(0);
  console.log(x.toFixed(0));
}

// The RR may only be numbers 1-9 and may have a decimal point//
function isValidRR(rr) {
  return /^[1-9]\d*(\.\d+)?$/.test(rr);
  
}
/* show element when show is true, hide when false */
function showOrHideTip(show, element) {
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return (e) => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}
/* Event Listeners */
rr.addEventListener("input", createListener(isValidRR));












