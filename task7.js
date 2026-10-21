const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")
const operation = document.getElementById("operation")
const calculateButton = document.getElementById("calculateButton")
const result = document.getElementById("result")

calculateButton.addEventListener("click", function(){
    const a = Number(firstNumber.value);
    const b = Number(secondNumber.value);
    const operator = operation.value;

    let answer;

    if (operator === "+"){
        answer = a + b;
    } else if (operator === "-"){
        answer = a - b;
    } else if (operator === "*"){
        answer = a * b;
    } else if (operator === "/"){
        if (b === 0){
            result.textContent = "Don't divide by 0";
            return;
        } 
        answer = a / b;
    }
    result.textContent = answer;
})