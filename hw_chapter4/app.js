//1
let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it",
    defect: "The formal word for ‘error’",
    pm: "The short version  of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
}
while (true) {
    let keyDictionaryInput = prompt("Input a keyword:").toLowerCase();
    if (dictionary[keyDictionaryInput] === undefined) {
        let valDictionaryInput = prompt(`We could not find word ${keyDictionaryInput}, leave your explaination:`);
        dictionary[keyDictionaryInput] = valDictionaryInput;
        alert("Done");
    }
    else {
        alert(`${keyDictionaryInput}\n${dictionary[keyDictionaryInput]} `);
    }
}
//2
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for (let x in product) {
    console.log(x, product[x]);
}
//3
let products = [
    { name: 'Xiaomi portable charger 20000mah', brand: 'Xiaomi', price: 480, color: 'White', category: 'charger', provides: ['phukienzero', 'dientuccc'] },
    { name: 'VSmart Active 1', brand: 'VSmart', price: 5487, color: 'Black', category: 'phone', provides: ['tgdd', 'ddghn', 'vhStore'] },
    { name: 'IPhone X', brand: 'Apple', price: 21490, color: 'Gray', category: 'phone', provides: ['tgdd'] },
    { name: 'Samsung galaxy S10', brand: 'Samsung', price: 8490, color: '8490', category: 'phone', provides: ['tgdd'] }
]

let getPosProductInput = prompt("Enter Product Position: ");
console.log(`Position of ${getPosProductInput} is: `, products[getPosProductInput]);

let getCategoryInput = prompt("Enter your category: ").toLowerCase();
let getProviceInput = prompt("Enter your provide: ").toLowerCase();
for (let x in products) {
    console.log(`#${x}.`, products[x].name);
    console.log("price: ", products[x].price);
    console.log("provice: ", products[x].provides);
}
for (let x in products) {
    if (products[x].category.includes(getCategoryInput)) {
        console.log(`Search by ${getCategoryInput}: `, products[x]);
    }
}
for (let x in products) {
    if (products[x].provides.includes(getProviceInput)) {
        console.log(`Search by ${getProviceInput}: `, products[x]);
    }
}







