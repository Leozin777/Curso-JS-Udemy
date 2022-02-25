// (condição) ? 'Valor verdadeiro' : 'Valor falso';
const pontuacaoUsuario = 9919;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corUsuario = null;
const cor = corUsuario || 'Azul';

console.log(nivelUsuario, cor);