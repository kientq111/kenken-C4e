//1
for (let i = 0; i < 7; i++) {
    console.log(i);
}
//1.2
let n = (Number)(prompt("Enter a number:"));
for (let i = 0; i < n; i++) {
    console.log(i);
}
//1.3
n = (Number)(prompt("Enter n: "));
for (let i = 3; i < n; i++) {
    console.log(i);
}
//1.4
let c = (Number)(prompt("enter begin number "));
n = (Number)(prompt("Enter end number "));
for (let i = c; i < n; i++) {
    console.log(i);
}
//1.5
c = (Number)(prompt("enter begin number "));
n = (Number)(prompt("Enter end number "));
let s = (Number)(prompt("Enter s "));
for (let i = c; i < n; i = i + s) {
    console.log(i);
}
//2
let fNumber = 1;
n = (Number)(prompt("Enter a number "));
for (let i = 1; i <= n; i++) {
    fNumber = fNumber * i;
}
alert(`Factorial of ${n} = ${fNumber}`);
//3
let age = (Number)(prompt("How old are u? "));
if (age < 14) {
    alert("You are not old enough to view this content! ");
}
else {
    alert("Welcome!");
}
//4
let num = (Number)(prompt("x ="));
if (num % 2 == 0) {
    alert(`${num} is even number!`);
}
else {
    alert(`${num} is odd number!`);
}
//5
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");
if (username != "mindx" && password != "codethechange") {
    alert("account does not exist!");
}
else if (username != "mindx" && password == "codethechange") {
    alert("account does not exist! ");
}
else if (username == "mindx" && password != "codethechange") {
    alert("Wrong password!");
}
else {
    alert("Login Successful!");
}
