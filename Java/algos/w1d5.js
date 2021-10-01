var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];


function matrixSearch (larger, smaller) {
    for (var i = 0; i<larger.length; i++){
        for (var j = 0; j<larger[i].length; j++){
            if (larger[i][j]===smaller[0][0]){
                if (larger[i+1][j] === smaller[1][0] && larger[i+1][j+1] === smaller[1][1] && larger[i][j+1] === smaller[0][1]){
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(matrixSearch(big, small));