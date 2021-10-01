
const QTC = document.getElementById("QT");
const rrRoot = document.getElementById("rootRR");
const calculateResult = document.getElementById("QTC-Result");
document.getElementById("QTCbtn").onclick = calcQTC;

// ABV Calculator
function calcQTC() {
const rootInput = rrRoot.value;
    // get the square root of the inputed rr
  const root = Math.sqrt(rootInput);
//   divide QTC inputed value by square root of rr 
  const x = (QTC.value / root);

  calculateResult.innerHTML = "<h1>QTC=   <h1>"  +  x.toFixed(2);
  console.log(x.toFixed(2));
}

// The RR may only be numbers 1-9 and may have a decimal point//
// function isValidRR(rr) {
//   return /^[1-9]\d*(\.\d+)?$/.test(rr);
  
// }
/* show element when show is true, hide when false */
// function showOrHideTip(show, element) {
//   if (show) {
//     element.style.display = "inherit";
//   } else {
//     element.style.display = "none";
//   }
// }

// function createListener(validator) {
//   return (e) => {
//     const text = e.target.value;
//     const valid = validator(text);
//     const showTip = text !== "" && !valid;
//     const tooltip = e.target.nextElementSibling;
//     showOrHideTip(showTip, tooltip);
   
//   };
// }
/* Event Listeners */
rrRoot.addEventListener("input", createListener(isValidRR))
QTC.addEventListener("input", createListener(isValidRR))