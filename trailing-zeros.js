const trailingZerosFactorial = number => {

    const factorial = calculateFactorial(number);
    if (factorial === Infinity)
        return -1;

    let trailingZerosCount = 0;

    for (let i = 5; i <= number; i += 5) {
        let num = i;

        while (num % 5 === 0) {
            num /= 5;
            trailingZerosCount++;
        }
    }
    return trailingZerosCount;
};

const calculateFactorial = number =>
    number === 0 ? 1 : number * calculateFactorial(number - 1);

console.log(trailingZerosFactorial(100));
