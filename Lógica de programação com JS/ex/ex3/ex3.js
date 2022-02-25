function meuEscopo () {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const pessoas = []

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;

        pessoas.push({
            nome,
            sobrenome,
            peso,
            altura
        })

        console.log(pessoas)

        res.innerHTML += `<p>${nome}, ${sobrenome}, ${peso} e ${altura}<p/>`
    }

    

        
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()
