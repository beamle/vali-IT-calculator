
function getValueFirstNumber() {
    // Returns value of the first number
    return  document.querySelector('#firstNumber').valueAsNumber;
}

function getValueSecondNumber() {
    // Returns value of the second number
    return document.querySelector('#secondNumber').valueAsNumber;
}

let btnAdd = document.querySelector('.btn-add')
let btnExtract = document.querySelector('.btn-extract')
let btnMultiple = document.querySelector('.btn-multiple')
let btnDivide = document.querySelector('.btn-divide')

/* Addition */

btnAdd.addEventListener('click', () => {
    // An event listener is a function that initiates a predefined process if a specific event occurs!.
    document.querySelector("#result").innerHTML = `Result: ${(getValueFirstNumber()+getValueSecondNumber()).toString()}`
    return (getValueFirstNumber()+getValueSecondNumber())
});

/* Extraction */

btnExtract.addEventListener('click', () => {
    document.querySelector("#result").innerHTML = `Result: ${(getValueFirstNumber()-getValueSecondNumber()).toString()}`
    return (getValueFirstNumber()-getValueSecondNumber());
});

/* Multiplication */

btnMultiple.addEventListener('click', () => {
    document.querySelector("#result").innerHTML = `Result: ${(getValueFirstNumber()*getValueSecondNumber()).toString()}`
    return (getValueFirstNumber()*getValueSecondNumber());
});

/* Division */
btnDivide.addEventListener('click', () => {
    document.querySelector("#result").innerHTML = `Result: ${(getValueFirstNumber()/getValueSecondNumber()).toString()}`
    return (getValueFirstNumber()/getValueSecondNumber());
});


/*If you want to select all elements with class
.innerBox inside div #container1 use querySelectorAll()
document.querySelectorAll("#container1 .innerBox");*/


/* It is important to remember that the
getElementById method only selects the first
element on a page if there are many items with the same id */
