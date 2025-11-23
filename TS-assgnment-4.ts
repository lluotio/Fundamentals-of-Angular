function castValue(input:unknown) {
    if (typeof input === 'string'){
        let stringValue: string = input as string;
        console.log(stringValue);
    }
    else if (typeof input === 'number'){
        let numberValue: number = input as number;
        console.log(numberValue);
        
    }
    else{
        console.log('Sorry, this is an unsupported type');
    }
}

castValue("Word");
castValue(525);
castValue(false);
