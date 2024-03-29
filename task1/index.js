
    let operand1 = prompt("enter operand1");
    let operand2 = prompt("enter operand2");
    let operator = prompt("enter operator");


    function add(x, y) {
        return x + y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function subtract(x, y) {
        return x - y;
    }
    function division(x, y) {
        if (y == 0) {
            alert("operator2 cannot be 0.kindly give some other number.");
        }
        else {
            return x / y;
        }
    }


    if (operand1 === "" || operand2 === "") {
        alert("Please enter values for operands.");
    } else {
       
        operand1 = Number(operand1);
        operand2 = Number(operand2);


    if (isNaN(operand1) || isNaN(operand2)) {
        alert("Kindly enter numeric values for operands.");
    } else {

    let result;

    switch (operator) {
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = subtract(operand1, operand2);
            break;
        case '*':
            result = multiply(operand1, operand2);
            break;
        case '/':
            result = division(operand1, operand2);
            break;
        default:
            alert("kindly use operand out of +,-,/,* only.");
    }


    console.log(result);

    }
}







