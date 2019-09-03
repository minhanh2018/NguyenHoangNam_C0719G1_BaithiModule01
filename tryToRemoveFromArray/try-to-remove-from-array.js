function tryToRemoveFromArray(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// console.log(tryToRemoveFromArray([12,6,3,7,21,5,7], 7));
// console.log(tryToRemoveFromArray([12,6,3,7,21,5,7], 12));