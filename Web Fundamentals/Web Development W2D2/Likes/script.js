var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

function likes(id) {
    if(id == "likes_p1") {
        count++;
        document.getElementById(id).innerText = count + " like(s)";
    }
    else if(id == "likes_p2_1") {
        count2++;
        document.getElementById(id).innerText = count2 + " like(s)";
    }
    else if(id == "likes_p2_2") {
        count3++;
        document.getElementById(id).innerText = count3 + " like(s)";
    }
    else if(id == "likes_p2_3") {
        count4++;
        document.getElementById(id).innerText = count4 + " like(s)";
    }
}

