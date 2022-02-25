const verdadeira = true;

//let tem escopo de bloco {...bloco}
//var só tem escopo de função

let nome = 'leo'; //criei a variavel utilizando let
var nome2 = 'joao'; //criei a variavel utilizando var

if (verdadeira){
    let nome = 'paulo'; //criei a variavel utilizando let
    var nome2 = 'andré'; //redeclarei a variavel 

    if(verdadeira){
        let nome = 'sergio'; //criei a variavel utilizando let
        var nome2 = 'claudio'; //redeclarei a variavel 
    }
}

console.log(nome, nome2)