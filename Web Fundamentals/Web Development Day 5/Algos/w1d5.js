var arr = [1, 2, 3, 4, 5, 6, 7, 10];

function reverse(arr) {
    for(var i=0; i<arr.length/2; i++) {
        var placeholder = arr[i];
        var position = arr.length-i-1;
        arr[i] = arr[position];
        arr[position] = placeholder;
    }
}

reverse(arr);
console.log(arr);
