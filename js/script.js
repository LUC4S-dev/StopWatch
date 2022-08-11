// Função para formatar a hora / function that format the time 
function horaDosSegundos(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}

let relogio = document.querySelector('.crono');
let iniciar = document.querySelector('#btnIniciar');
let pausar = document.querySelector('#btnPausar');
let zerar = document.querySelector('#btnZerar');
let segundos = 0;
let timer;

// Função para iniciar a hora do relógio / function that iniciates the clock time 
function iniciarRelogio(){
  timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = horaDosSegundos(segundos);
    },1000);
}
    
function zerarRelogio(){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = "00:00:00";
}

function pausarRelogio(){
    clearInterval(timer);
}

iniciar.addEventListener('click', function(evento){
    iniciarRelogio();
});

pausar.addEventListener('click', function(evento){
   pausarRelogio();
});

zerar.addEventListener('click', function(evento){
   zerarRelogio();
});