let n1 = Number(prompt('Digite um número:'));
const titulo = document.getElementById('num');
const texto = document.getElementById('texto')

titulo.innerHTML = `${n1}`
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(n1)}<p/>`
texto.innerHTML += `<p>${n1} é inteiro: ${Number.isInteger(n1)}<p/>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(n1)}<p/>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(n1)}<p/>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(n1)}<p/>`
texto.innerHTML += `<p>Com duas casas decimais: ${n1.toFixed(2)}<p/>`


