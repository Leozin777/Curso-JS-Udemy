//const data = new Date(0); //01/01/1970 TimeStamp unix ou época unix
//const data = new Date('2019-04-20 20:20:59')

/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(data.toString());*/

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth() +1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
}

const data = new Date();