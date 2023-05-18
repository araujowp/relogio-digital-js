const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function tempo(){

    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minuto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();

    horas.textContent = hora.toString().padStart(2, '0');
    minutos.textContent = minuto.toString().padStart(2, '0');
    segundos.textContent = segundo.toString().padStart(2, '0');

})