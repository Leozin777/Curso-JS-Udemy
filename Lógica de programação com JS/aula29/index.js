function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

function a(){
    console.log(mostraHora())
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000)