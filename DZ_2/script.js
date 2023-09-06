const firstNumber = +prompt("Enter first number");
const secondNumber = +prompt("Enter second number");

if (firstNumber && secondNumber !== undefined) {
  alert(
    `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n 
    ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
    ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
    ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}\n`
  );
}
