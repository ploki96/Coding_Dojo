var count = 0;
var count2 = 0;

function signout(element) {
    if (element.innerText == "Logout")
        element.innerText = "Login";
        else element.innerText = "Logout";
}

function likes(element) {
    ++count;
    element.innerText = count + " likes";
}

function likes2(element) {
    ++count2;
    element.innerText = count2 + " likes";
}

function hide(element) {
    element.remove();
}

