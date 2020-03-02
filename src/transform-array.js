module.exports = function transform(arr) {
    if (Array.isArray(arr) == false) {
        throw Error;
    }
    else if (arr == []) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'string' && typeof(arr[0]) =='string' ) {
            arr.splice(0,1);
        }
        else if (typeof(arr[i]) == 'string' && typeof(arr[arr.length-1]) =='string' ){
            arr.splice(i,1);
        }
        else if (arr[i] == '--discard-next') {
            arr.splice(i,2)
        }
    
    else if (arr[i] == '--discard-prev') {
         arr.splice(i-1, 2) 
    }

   else if (arr[i] == '--double-next') {
        arr[i] = arr[i+1];
    }
    else if (arr[i] == '--double-prev') {
        arr[i]=  arr[i-1];
    }
    }
    return arr;
};
