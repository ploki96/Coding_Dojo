function bubbleSort(arr){
    for(var i=0; i < arr.length; i++){
        for (var j=0; j<arr.length - 1; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5, 4, 2, 6, 8, 14, 1, 3];
console.log(arr);
console.log(bubbleSort(arr));