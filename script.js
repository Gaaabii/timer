const counterElement = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement =document.getElementById('decrement');
const reset=document.getElementById('reset');
const counter2Element = document.getElementById('counter2');
const increment2 = document.getElementById('increment2');
const decrement2 = document.getElementById('decrement2');
const iniciar=document.getElementById('iniciar');
const marcaa=document.getElementById('marca');
const pausar=document.getElementById('pausa');
const flag = document.getElementById('flag');
let i=0;
let contadormarcaElement=0;
let counter = 0;
let counter2=0;
let marcas = [];

function updateTime(){
    counterElement.textContent = counter;
    counter2Element.textContent = counter2;
    flag.textContent=marcas.join("\n");
    
}
function incrementCounter(){
    counter++;
    if (counter >=60){
        counter = 0;
    }
    updateTime();
}

function decrementCounter(){
    counter--;
    if (counter <=0){
        counter = 59;
    }
    updateTime();
}
function incrementCounter2(){
    counter2++;
    if (counter2 >=60){
        counter2 = 0;
    }
    updateTime();
}

function decrementCounter2(){
    counter2--;
    if (counter2 <=0){
        counter2 = 59;
    }
    updateTime();
}
function resetHora(){
    counter = 0;
    counter2 = 0;
    marcas.splice(0,marcas.length);
    parartiempo();
    updateTime();
}
function iniciarHora() {
    timer = setInterval(() => {
        if (counter2 === 0) {
            if (counter === 0) {
                parartiempo(); // Detener el temporizador si el tiempo ha alcanzado 0:00
                return;
            }
            counter--;
            counter2 = 59; // Reiniciar los segundos a 59
        } else {
            counter2--;
        }
        updateTime(); // Actualizar la visualización del contador
        if(counter === 0 && counter2 === 0) {
            parartiempo();
        }
    }, 1000);
}
function parartiempo(){
    clearInterval(timer);
}

function marca(){
    i++;
    marcas.push(i+". ----> "+counter+":"+counter2);

}
function pausa(){
    parartiempo();
}
pausar.addEventListener("click",pausa);
marcaa.addEventListener('click',marca)
iniciar.addEventListener('click', iniciarHora);
increment.addEventListener('click', incrementCounter);
decrement.addEventListener('click', decrementCounter);
increment2.addEventListener('click', incrementCounter2);
decrement2.addEventListener('click', decrementCounter2);
reset.addEventListener('click', resetHora);
updateTime();