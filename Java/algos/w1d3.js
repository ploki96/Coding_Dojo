// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

function removeDupe(arr) {
    const set1 = new Set();
    let i = 0;
    while( i !== arr.length ) {
        if( set1.has(arr[i]) ){
            arr.splice(i,1);
        } else{
            set1.add(arr[i]);
            ++i;
        }
    }
    return arr;
}

console.log(removeDupe([1,2,1,3,4,2, 3, 4, 1, 2, 3, 4]))