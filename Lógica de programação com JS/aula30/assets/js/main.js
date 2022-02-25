const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(text){
    const li = criaLi();
    li.innerHTML = text;
    tarefas.appendChild(li)
    criaBotaoApagar(li);
    salvaTarefa();
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botao = document.createElement('button');
    botao.innerText = 'Apagar';
    li.appendChild(botao);
    botao.setAttribute('class', 'apagar');
    botao.setAttribute('title', 'Apagar a tarefa')
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvaTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJson);
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefa();
    }
})

function addTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

    console.log(tarefas);
}

addTarefaSalva();
