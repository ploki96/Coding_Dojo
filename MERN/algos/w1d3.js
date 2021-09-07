//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
}
var tempArray = [];
    while(a.length || b.length) {
        if(typeof a[0] === 'undefined') {
            tempArray.push(b[0]);
            b.splice(0,1);
        } else if(a[0] > b[0]){
            tempArray.push(b[0]);
            b.splice(0,1);
        } else {
            tempArray.push(a[0]);
            a.splice(0,1);
        }
    }
    return tempArray;

// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));

var tempArray = [];
var currentPos = {
    a: 0,
    b: 0
}
while(currentPos.a < a.length || currentPos.b < b.length) {
    if(typeof a[currentPos.a] === 'undefined') {
        tempArray.push(b[currentPos.b++]);
    } else if(a[currentPos.a] > b[currentPos.b]){
        tempArray.push(b[currentPos.b++]);
    } else {
        tempArray.push(a[currentPos.a++]);
    }
}
return tempArray;