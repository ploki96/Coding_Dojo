// partition
function partition(arr, front, end){
    var index = Math.floor((front+end)/2);
    var pivot = arr[index];
    var i = front;
    var j = end;
    while (i<j){
        while (arr[i]< pivot){
            i++;
        }
        while (arr[j]> pivot){
            j--;
        }

        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            if(index === j){
                index= i;
            }
            else if(index === i){
                index = j;
            }
            if(i!=index){
            i++;
            }
            if (j!=index){
            j--;
            }
        
        }
    }
    return index;
}

//quicksort
function quicksort(arr, front, end){
    if (front >= end){
        return arr;
    }
    var part_index = partition(arr, front, end);
    console.log("part_index: "+part_index);
    // if (front < part_index) {
        // console.log("arr: "+arr, "front: "+front, "part index: "+part_index)
        quicksort(arr, front, part_index- 1)
    // }
    // if (part_index < end) {
        // console.log("arr2: "+arr, "part index2: "+part_index, "end2: "+end)
        quicksort(arr, part_index+1, end)
    // }
    return arr;
}

testarr = [3, 2, 8, 87, 37,12, 18, 5, 23, 99, 6, 4, 57]
newarr = quicksort(testarr, 0, testarr.length -1)
// newarr = partition(testarr, 0, testarr.length - 1)
console.log(newarr)

// [2, 6, 4, 9, 5, 7, 1, 8, 3]

// // partition
// function partition(arr, front, end){
//     var index = front;
//     var pivot = arr[front];
//     for(let i =front;i<=end;i++){
//         if(arr[i]<pivot){
//             arr[i]
//         }
//     }
//     // console.log("return j: "+j)
//     // console.log(arr)
//     return j;
// }

// //quicksort
// function quicksort(arr, front, end){
//     if (front >= end){
//         return arr;
//     }
//     var part_index = partition(arr, front, end);
//     console.log("part_index: "+part_index);
//     // if (front < part_index) {
//         // console.log("arr: "+arr, "front: "+front, "part index: "+part_index)
//         quicksort(arr, front, part_index- 1)
//     // }
//     // if (part_index < end) {
//         // console.log("arr2: "+arr, "part index2: "+part_index, "end2: "+end)
//         quicksort(arr, part_index+1, end)
//     // }
//     return arr;
// }

// testarr = [3, 2, 8, 87, 37, 6, 4, 57]
// newarr = quicksort(testarr, 0, testarr.length - 1)
// console.log(newarr)

// // [2, 6, 4, 9, 5, 7, 1, 8, 3]

