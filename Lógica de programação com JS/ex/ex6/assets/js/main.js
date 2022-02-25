const sec = document.querySelector('.container');
const div = document.createElement('div');
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]
    let cria = document.createElement(tag)
    cria.innerText = texto;
    div.appendChild(cria);
}

sec.appendChild(div);
