var myName = document.getElementById("Username");

function name_change() {
    myName.innerText = "Timothy Wang";
}

var Todd = document.getElementById("Todd");
var Phil = document.getElementById("Phil");
var count = 418;

// function name_change () {
//     document.getElementById("Username").innerText = "Timothy Wang";
// }

// function disappear(id) {
//         document.getElementById(id).remove();
// }

function disappear(id) {
    document.querySelector("#" + id).remove();
}

// function disappear(id) {
//     if(id == "Todd") {
//         Todd.remove();
//     }
//     else if (id == "Phil") {
//         Phil.remove();
//     }
// }

function increase(id) {
    count++;
    document.getElementById("connections").innerText = count;
}

function decrease(id) {
    count--;
    document.getElementById("connections").innerText = count;
}