function findMaxScore(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(findMaxScore([10, 5, 2, 8, -1, 6, 8]));
// console.log(findMaxScore([2, 4, 0, 5, 1]));
// console.log(findMaxScore([-8, -6, -2, -6, -1, -1, -4]));