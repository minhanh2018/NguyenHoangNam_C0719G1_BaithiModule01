function printFibonacci(number) {
    let FIRST_NUMBER = 0;
    let SECOND_NUMBER = 1;
    let THIRD_NUMBER = 1;
    let arrFibonacci = [1,1];
    for (let i = 0; i < number; i++) {
        FIRST_NUMBER = SECOND_NUMBER;
        SECOND_NUMBER = THIRD_NUMBER;
        THIRD_NUMBER = FIRST_NUMBER + SECOND_NUMBER;
        if(THIRD_NUMBER <= number) {
            arrFibonacci.push(THIRD_NUMBER);
        }
    }
    return arrFibonacci.join(",");
}

console.log(printFibonacci(12));