//faça uma função que receba dois números e retorne o maior
function num (n1,n2){

    /*if (n1 > n2){
        return console.log(`n1 é ${n1} e é maior que n2: ${n2}`)
    } else{
        return console.log(`n2 é ${n2} e é maior que n1: ${n1}`)
    }*/

    return n1 > n2 ? n1 : n2;
}

console.log(num(50,10))