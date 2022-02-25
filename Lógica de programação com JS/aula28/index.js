try{
    //é executado qunado não há erros
} catch(e){
    //é executado quando há erros
} finally{
    //é executado sempre
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {

    })
}

const hora = retornaHora();
console.log(hora);