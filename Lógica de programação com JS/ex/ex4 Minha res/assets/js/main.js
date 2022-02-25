const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const imc = calc(peso, altura);
    const classificacao = tabIMC(imc);
    escreve(imc, classificacao);
 

});

function calc (peso, altura){
    const resultado = peso / altura ** 2;
    return resultado.toFixed(2);
}

function tabIMC(valor){
    const classifica = ["Abaixo do peso", "Peso ideal", "SobrePeso", "Obesidade 1", "Obesidade 2", "Obesidade 3"]

    if(valor < 18.5){
        return classifica[0];
    }  else if(valor >= 18.5 && valor <= 24.9){
        return classifica[1];
    }  else if(valor >= 25 && valor <= 29.9){
        return classifica[2];
    }  else if(valor >= 30 && valor <= 34.9){
        return classifica[3];
    }  else if(valor >= 35 && valor <= 39.9){
        return classifica[4];
    }  else if(valor >= 40){
        return classifica[5];
    }
}

function escreve (msg, msg2){
    const res = document.querySelector('#res');
    res.innerHTML = `<p>Seu IMC é ${msg}, e a classifição: ${msg2}</p>`;
}   

