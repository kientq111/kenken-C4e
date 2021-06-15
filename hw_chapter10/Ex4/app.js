let timeSheetData = [
    {
        "project": "Learn front-end",
        "task": "Learn CSS",
        "time_spent": 6
    },
    {
        "project": "Learn front-end",
        "task": "Learn HTML",
        "time_spent": 8
    },
    {
        "project": "Learn front-end",
        "task": "Learn JS Variable and Data Types",
        "time_spent": 6
    },
    {
        "project": "Learn front-end",
        "task": "Learn Git Basics",
        "time_spent": 2
    }
]
let btnAdd = document.getElementById("btnAdd");
let btnClear = document.getElementById("btnClear");
let txtProject = document.getElementById("txtProject");
let txtTask = document.getElementById("txtTask");
let txtTimeSpent = document.getElementById("txtTimeSpent");
let tblTimeSheets = document.getElementById("datas");


var tr = "";
timeSheetData.forEach(x => {
    tr += '<tr>';
    tr += '<td>' + x.project + '</td>' + '<td>' + x.task + '</td>' + '<td>' + x.time_spent + '</td>' + '<td>' + '<input type="button" id="btnDel" value="X" onclick="deleteRow(this)">' + '</td>';
    tr += '</tr>';
})
tblTimeSheets.innerHTML += tr;


btnAdd.addEventListener("click", function (e) {
    let tprojext = txtProject.value;
    let ttask = txtTask.value;
    let ttime = txtTimeSpent.value;

    timeSheetData.push({
        project: tprojext,
        task: ttask,
        time_spent: ttime
    });
    let addDt = "";
    addDt += '<tr>';
    addDt += '<td>' + txtProject.value + '</td>' + '<td>' + txtTask.value + '</td>' + '<td>' + txtTimeSpent.value + '</td>' + '<td>' + '<input type="button" value="X" onclick="deleteRow(this)")>' + '</td>';
    addDt += '</tr>';
    tblTimeSheets.innerHTML += addDt;
});

function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex - 1;
    tblTimeSheets.deleteRow(i);
  }
