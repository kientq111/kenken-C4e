//3
let btnOk = document.getElementById("btn");
let lblResult = document.getElementById("lbl");
let txtName = document.getElementById("txt");

btnOk.addEventListener("click", function(e) {
    console.log(btnOk);
    console.log(txtName);
    console.log(`User's Name ${txtName.value}`);
    console.log(`User's Name uppercase: ${txtName.value.toUpperCase()}`);
    console.log(lblResult);
    lblResult.innerHTML = txtName.value.toUpperCase();
});