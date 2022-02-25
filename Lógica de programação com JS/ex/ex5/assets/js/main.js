/*function getDayWeek(dia){
    let diaSemanaTexto;

    switch (dia){
        case 0:
            return diaSemanaTexto = 'Domingo';
        
        case 1:
            return diaSemanaTexto = 'Segunda';
        
        case 2:
            return diaSemanaTexto = 'Terça';
        
        case 3:
            return diaSemanaTexto = 'Quarta';
        
        case 4:
            return diaSemanaTexto = 'Quinta';
        
        case 5:
            return diaSemanaTexto = 'Sexta';
        
        case 0:
            return diaSemanaTexto = 'Sábado';
        
        default:
            return diaSemanaTexto = '';
        
    }

}

function mesText(mesN){
    let mesTexto;

    switch(mesN){
        case 0:
            return mesTexto = 'Janeiro';
        case 1:
            return mesTexto = 'Fevereiro';
        case 2:
            return mesTexto = 'Março';
        case 3:
            return mesTexto = 'Abril';
        case 4:
            return mesTexto = 'Maio';
        case 5:
            return mesTexto = 'Junho';
        case 6:
            return mesTexto = 'Julho';
        case 7:
            return mesTexto = 'Agosto';
        case 8:
            return mesTexto = 'Setembro';
        case 9:
            return mesTexto = 'Outubro';
        case 10:
            return mesTexto = 'Novembro';
        case 11:
            return mesTexto = 'Dezembro';

    }
}

function zeroE(num){
    return num >= 10 ? num < 10 : `0${num}`;
}

function escreveData(dia,diaN,mes,ano,hora,minutos){
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = `<p>${dia}, ${diaN} de ${mes} de ${ano}, ${hora}:${minutos}</p>`;
    
}

const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const hora = data.getHours();
const min = data.getMinutes();
const mes = data.getMonth();
const ano = data.getFullYear();

escreveData(getDayWeek(diaSemana), diaMes, mesText(mes), ano, hora, zeroE(min));
*/


/*Outra forma de resolver, bem mais simples

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
*/

//da pra fazer usando arrays
