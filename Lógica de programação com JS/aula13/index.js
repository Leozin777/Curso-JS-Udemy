/*function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('leo', 'cardoso', 20);
const pessoa2 = criaPessoa('paulo', 'careedoso', 22);
const pessoa3 = criaPessoa('jean', 'aaaa', 20);
const pessoa4 = criaPessoa('cleber', 'santos', 20);
const pessoa5 = criaPessoa('joao', 'silva', 20);

console.log(pessoa1.nome)*/

const pessoa1 = {
    nome: 'leo',
    sobre: 'car',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();