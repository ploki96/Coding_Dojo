//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for(let i =0;i<arr.length-1;i++){
        let min_index = i;
        for(let j=i;j<arr.length;j++){
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    for(let i=1;i<arr.length;i++){
        let current_value = i;
        for(let j=i-1;j>=0;j--){
            if (arr[current_value]<arr[j]){
                temp = arr[current_value];
                arr[current_value] = arr[j];
                arr[j] = temp;
                current_value--
            }
        }
    }
    return arr
}
console.log(insertionSort([6,4,5,2,8,-14,1,3, -4]));