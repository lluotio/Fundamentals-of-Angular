type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(arrayNumbers:number[]): ArrayValues {
    //Calculate the sum & count here
    let sum = 0;
    let count = arrayNumbers.length;

    for (let i = 0; i < count; i++){
        sum += arrayNumbers[i];
    }
    return {
        sum,
        count
    };
}

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);