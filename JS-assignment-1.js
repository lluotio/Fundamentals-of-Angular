let lista = [1,2,3,4,5]

function arraySum(lista){
    let summa = 0;
    for (let i = 0; i < lista.length; i++) {
        summa += lista[i];
    }
    return summa
}

console.log(arraySum(lista))
