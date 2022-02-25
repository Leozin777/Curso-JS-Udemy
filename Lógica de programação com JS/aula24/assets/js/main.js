const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p')

const estiloBack = getComputedStyle(document.body);
const back = estiloBack.backgroundColor;

console.log(back)


for (let i of p){
    i.style.backgroundColor = back;
    i.style.color = 'white'
}