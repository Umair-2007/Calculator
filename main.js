//This will take input from user
first = parseInt(prompt("Enter first number"));
operator = prompt("Choose operator +,*,-,/");
second = parseInt(prompt("Enter second number"));

//This will recognize the right operator
if (operator == '+') {
  alert(first + second);
}
else if (operator == '-') {
  alert(first - second);
}
else if (operator == '*') {
  alert(first * second);
}
else if (operator == '/') {
  alert(first / second);
}
else {
  alert("Invalid operation");
}