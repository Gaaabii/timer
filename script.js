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
const marcaElement = document.getElementById('marcaa');
const marcaElement2 = document.getElementById('marcaa2');
const marcaElement3 = document.getElementById('marcaa3');
const marcaElement4 = document.getElementById('marcaa4');
const marcaElement5 = document.getElementById('marcaa5');
const marcaElement6 = document.getElementById('marcaa6');
const marcaElement7 = document.getElementById('marcaa7');
const marcaElement8 = document.getElementById('marcaa8');
const marcaElement9 = document.getElementById('marcaa9');
let contadormarcaElement=0;
let counter = 0;
let counter2=0;

function updateTime(){
    counterElement.textContent = counter;
    counter2Element.textContent = counter2;
    marcaElement.textContent = marcaElement.textContent;
    
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
    switch(contadormarcaElement){
        case 0:
            marcaElement.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 1:
            marcaElement2.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 2:
            marcaElement3.textContent = +counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 3:
            marcaElement4.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 4:
            marcaElement5.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 5:
            marcaElement6.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 6:
            marcaElement7.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 7:
            marcaElement8.textContent = counter+":"+counter2;
            contadormarcaElement++;
            break;
        case 8:
            marcaElement9.textContent = counter+":"+counter2;
            contadormarcaElement=0;
            break;
        
    } 
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