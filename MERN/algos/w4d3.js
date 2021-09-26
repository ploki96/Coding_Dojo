const calcPrefix = (arr) => {
    var symbols = [];
    var numbers = [];
    var output;
    for (var i =0; i<arr.length;i++){
        if (!isNaN(arr[i]) && output == null) {
            output = arr[i];
        } else if (!isNaN(arr[i])) {
            numbers.push(arr[i]);
        }else {
            symbols.push(arr[i])
        }
    }
    return(output)
}

