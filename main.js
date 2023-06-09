//This will take input from user
first = parseFloat(prompt("Enter first number"));
operator = prompt("Choose operator");
second = parseFloat(prompt("Enter second number"));

//This will recognize the right operator
if (operator == '+') {
  console.log(first + second);
}
else if (operator == '-') {
  console.log(first - second);
}
else if (operator == '*') {
  console.log(first * second);
}
else if (operator == '/') {
  console.log(first / second);
}
else {
  console.log("Invalid operation");
}