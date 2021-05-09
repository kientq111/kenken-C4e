//1
let rawStrReverse = prompt("Input String:");
let strReverse = "";
for (let i = rawStrReverse.length - 1; i >= 0; i--) {
    strReverse += rawStrReverse[i];
}
console.log(strReverse);

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

//5
let dateInput = prompt("Input date to check validate");
if (isValidDate(dateInput) === false) {
    alert("date invalid!");
} else {
    let datePart = dateInput.split("/");
    let day = new Date(`${datePart[3]},${datePart[2]},${datePart[1]}`);
    console.log(day);
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    alert(`VALID \n ${nextDay}`);
}

function isValidDate(str) {
    let parts = str.split('/');
    if (parts.length < 3)
        return false;
    else {
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let year = parseInt(parts[2]);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            return false;
        }
        if (day < 1 || year < 1)
            return false;
        if (month > 12 || month < 1)
            return false;
        if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31)
            return false;
        if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
            return false;
        if (month == 2) {
            if (((year % 4) == 0 && (year % 100) != 0) || ((year % 400) == 0 && (year % 100) == 0)) {
                if (day > 29)
                    return false;
            } else {
                if (day > 28)
                    return false;
            }
        }
        return true;
    }
}



