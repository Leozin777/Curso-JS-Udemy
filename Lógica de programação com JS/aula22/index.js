//For in, lê os indices

const frutas = ['melancia', 'uva', 'maça', 'pera'];

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Cardoso',
    idade: 20
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

/*for (let i in frutas){
    console.log(frutas[i])
}*/