const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Siveira',
    idade: 20,
    endereco: {
        rua: 'Av Brasil',
        num: 230
    }
};

//Atribuição via desestruturação (esse tipo de atribuição é muito usado em react)
const { nome, sobrenome, idade, endereco:{ rua: r = 1245, num } } = pessoa; 

console.log(nome, sobrenome, num)