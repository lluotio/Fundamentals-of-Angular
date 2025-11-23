function convertShoeSize(euShoeSize:number): number{
    const offset = 33;
    let usShoeSize = euShoeSize - offset;
    return usShoeSize;
}

console.log(convertShoeSize(42));