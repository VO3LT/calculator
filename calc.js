let total = document.getElementById("total");
let number = document.getElementsByClassName("num");
let deleteAll = document.getElementById("deleteAll");
let delet = document.getElementById("delete");
let ysawe = document.getElementById("ysawe");


function getTotal(result) {
    total.value += result;
}

deleteAll.onclick = function () {
    total.value = '';
}

delet.onclick = function () {
   total.value = total.value.slice(0, -1);
}

function calc() {
    try {
        total.value = eval(total.value);
    } catch (err) {
        total.value = "error";
    }
}