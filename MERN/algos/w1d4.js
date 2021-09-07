//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr, front, end) => {
    let index = front;
    let pivot = arr[index];
    for(var i = front + 1; i <= end; i++){
        if (arr[i]<pivot){
            for (var j = i; j>index;j--){
                var temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
            index++;
        }
    }
    console.log(arr);
    return index;
}

//quicksort
function quicksort(arr, front, end){
    if (front >= end){
        return arr;
    }
    var part_index = partition(arr, front, end);
    console.log("part_index: "+part_index);
        quicksort(arr, front, part_index- 1)
        quicksort(arr, part_index+1, end)

    return arr;
}

testarr = [3, 2, 8, 87, 37,12,1, 0, 18, 5, 23,-1, -5, 99, 6, 4, 57]
newarr = quicksort(testarr, 0, testarr.length -1)
// newarr = partition(testarr, 0, testarr.length - 1)
console.log(newarr)
