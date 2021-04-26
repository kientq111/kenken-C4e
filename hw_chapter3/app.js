//1
let products = ["Jean", "T-shirt", "Shocks"];
while (true) {
    let quit = true;
    var menuInput = Number(prompt("Hi there, welcome to admin panel, what do you want?\n" +
        "1. Create\n" +
        "2. Read\n" +
        "3. Update\n" +
        "4. Delete\n" +
        "5. Exit\n" +
        "Enter number to choose a panel!"));
    if (menuInput !== 1 && menuInput !== 2 && menuInput !== 3 && menuInput !== 4 && menuInput !== 5)
        alert("Please enter number (1 - 4)!");
    switch (menuInput) {
        case 1:
            addProduct(products);
            break;
        case 2:
            console.log("The current items are: ", products);
            break;
        case 3:
            updateProduct(products);
            break;
        case 4:
            deleteProduct(products);
            break;
        case 5:
            alert("Good bye!");
            quit = false;
            break;
    }
    if (quit == false) {
        break;
    }
}

function updateProduct(products) {
    let indexProductInput = Number(prompt("Enter the position you want to update:"));
    let nameProductInput = prompt("Enter new name:");
    products[indexProductInput] = nameProductInput;
}

function addProduct(products) {
    let addProductInput = prompt("Enter new name:");
    products.push(addProductInput);
}

function deleteProduct(products) {
    let indexDelInput = Number(prompt("Enter the position you want to Delete:"));
    products.splice(indexDelInput, 1);
}

//2
let arr = [3, 4, 6, -9, 10, -88, 2];
positiveArrNum = arr.filter((pNum) => pNum >= 0);
let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
}
console.log("Sum of array =", sumArr);
console.log("Positive number of array: ", positiveArrNum);

let searchArr = Number(prompt("Enter a number in array list: "));
if (arr.includes(searchArr) == false) {
    alert("Not FOUND!");
}
else {
    alert(`${searchArr}  is FOUND in my array at index: ${arr.indexOf(searchArr)} `);
}

//3
let arrStrInput = prompt("Enter array, Seprate by ' '  :");
let arrNumber = arrStrInput.split(" ").map(Number);
console.log(arrNumber);
//4
let min = arrNumber[0];
for (let k = 0; k < arrNumber.length; k++) {
    if (arrNumber[k] < min)
        min = arrNumber[k];
}
alert(`Smaller number is ${min}`);
//5
let rawStrInput = prompt("Nhập danh sách: ");
let fname = rawStrInput.split(',');
let upperName = fname.map(fname => fname.toUpperCase());
alert(upperName);

//6
let rawArrNumInput = prompt("Enter array, Seprate by ',' :");
let arrNum = rawArrNumInput.split(',').map(Number);
let oddArrNum = arrNum.filter((oddNum) => oddNum % 2);
alert(`odd number in array are ${oddArrNum}`);


