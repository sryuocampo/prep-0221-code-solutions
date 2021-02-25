function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 4));

function convertHoursToMinutes(num) {
  var n = 60;
  return num * n;
}

console.log(convertHoursToMinutes(2));

function personalizeGreeting(g) {
  var name = 'Hello ' + g + '!';
  return name;
}
console.log(personalizeGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  var n2 = num1 * num2;
  return n2 / 5;
}
console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Juan', 'Ramirez'));

function cube(num1) {
  return num1 * num1 * num1;
}
console.log(cube(5));
