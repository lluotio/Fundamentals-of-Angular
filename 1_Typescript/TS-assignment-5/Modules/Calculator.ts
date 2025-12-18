import { ArrayValues } from "./ArrayValues";

export class Calculator {

    calcArray(arrayNumbers: number[]): ArrayValues {
        let sum = 0;
        let count = arrayNumbers.length;

        for (let i = 0; i < count; i++) {
            sum += arrayNumbers[i];
        }

        return new ArrayValues(sum, count);
    }
}
