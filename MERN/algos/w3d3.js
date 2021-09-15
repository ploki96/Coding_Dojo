//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (leftArr,rightArr) => {
    var output = [];
    for (var i =0; i<leftArr.length;i++) {
        for (var j=0; j<rightArr.length; j++) {
            if (leftArr[i] === rightArr[j]) {
                output.push(leftArr[i]);
                // leftArr.splice(i,1);
                rightArr.splice(j,1);
                break;
            }
        }
    }
    return output;
}

const intersectUnsorted = (leftArr,rightArr) => {
    let newArr = [];
    let leftCounts = {};
    let rightCounts = {};

    for(let i = 0; i < leftArr.length; i++){
        if(leftCounts.hasOwnProperty(leftArr[i])){
            // console.log(`object has key ${leftArr[i]} so we increase the value`);
            leftCounts[leftArr[i]]++;
        }
        else{
            // console.log(`obj does not have key ${leftArr[i]} so we initialize it to 1`)
            leftCounts[leftArr[i]] = 1;
        }
    }
    
    for(let i = 0; i < rightArr.length; i++){
        if(rightCounts.hasOwnProperty(rightArr[i])){
            // console.log(`object has key ${rightArr[i]} so we increase the value`);
            rightCounts[rightArr[i]]++;
        }
        else{
            // console.log(`obj does not have key ${rightArr[i]} so we initialize it to 1`)
            rightCounts[rightArr[i]] = 1;
        }
    }

    const leftKeys = Object.keys(leftCounts);
    for(let i = 0; i < leftKeys.length; i++){
        if(rightCounts.hasOwnProperty(leftKeys[i])){
            let times = rightCounts[leftKeys[i]] < leftCounts[leftKeys[i]] ? rightCounts[leftKeys[i]] : leftCounts[leftKeys[i]];
            // console.log(`common value ${leftKeys[i]} should be repeated ${times} times`);
            let val = parseInt(leftKeys[i]);

            for(let j = 0; j < times; j++){
                newArr.push(val);
            }
        }
    }

    return newArr;
}

console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2])); // 7, 2, 2
console.log(intersectUnsorted([1,2,2,27,2],[2,2,6,6,7])); // 2, 2
console.log(intersectUnsorted([1,5,9],[2,6,10,0,0,0,1])); // 1
console.log(intersectUnsorted([6,19,0,0,9,32,4],[2,0,6,7,18,0,6,1])); // 6, 0, 0
console.log(intersectUnsorted([23,4,100,108,16,15,2,8,42],[0,4,8,15,-100,42,108,23,16])); //23, 4, 108, 16, 15, 8, 42