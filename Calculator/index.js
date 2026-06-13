
const display = document.getElementById("display");

let resultIsshow = false;

function appendToDisplay(input){
    if(resultIsshow){
        display.value = input;
        resultIsshow = false;
    }
    else {
    display.value += input;
    }
}

const value = function(e) {
    display.value = e.target.value;
}

function clearDisplay(){
    display.value = "";

}

function calculate(){

    try {
        display.value = eval(display.value);
        resultIsshow = true;
    } catch (error) {
        display.value = "Error";
    }

}