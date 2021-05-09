//1
let strReverse = prompt("Input String:");
let str = "";
for (let i = strReverse.length - 1; i >= 0; i--) {
    str += strReverse[i];
}
console.log(str);

//2
let strInput = prompt("Input String");
let strArrays = strInput.split(" ");
let captStr = "";
for (let i = 0; i < strArrays.length; i++) {
    captStr = captStr + strArrays[i].charAt(0).toUpperCase() + strArrays[i].slice(1);
    captStr = captStr + " ";
}
alert(captStr);


// 3
let duplicateArr = ["One", "Two", "Three", "Four", "Four", "One"];
duplicateArr = [...new Set(duplicateArr)];
console.log(duplicateArr);

//4
let staffs = [
    { name: "Nguyen Anh Kien", old: 22, salary: 200, dept: "student" },
    { name: "Nguyen Anh Tuan", old: 24, salary: 600, dept: "teacher" },
    { name: "Pham Thi Hai Yen", old: 20, salary: 200, dept: "student" }
];

while (true) {
    let quit = true;
    var num = Number(prompt("Hi there, welcome to admin panel, what do you want?\n" +
        "1. Create\n" +
        "2. Read\n" +
        "3. Update\n" +
        "4. Delete\n" +
        "5. Exit\n" +
        "Enter number to choose a panel!"));
    if (!num)
        quit = false;
    switch (num) {
        case 1:
            addStaff();
            break;
        case 2:
            for (let x in staffs)
                console.log(staffs[x]);
            break;
        case 3:
            updateStaff();
            break;
        case 4:
            deleteStaff();
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

function addStaff() {
    let stName = prompt("Input name: ");
    let stOld = Number(prompt("Input old: "));
    let stSalary = Number(prompt("Input salary: "));
    let stDept = prompt("Input department: ");
    staffs.push({
        name: stName,
        old: stOld,
        salary: stSalary,
        dept: stDept
    });
}

function updateStaff() {
    let pos = Number(prompt("input index: "));
    let chooseProp = prompt("Choose property you want to update (name/old/salary/department)?");
    if (chooseProp === "old" || chooseProp === "salary") {
        let propt = Number(prompt(`Input new ${chooseProp} you want to update:`));
        staffs[pos][chooseProp] = propt;
    }
    else {
        let propt = prompt(`Input new ${chooseProp} you want to update:`);
        staffs[pos][chooseProp] = propt;
    }
}

function deleteStaff() {
    let pos = Number(prompt("input index u want to delete"));
    delete staffs[pos];
}



