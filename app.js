let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    let numeroUsuario =parseInt (document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades, acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya utilizamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya llegaste al nivel maximo del juego, se utilizaron todos los numeros posibles')
    }else{
        //si el numero generado esta incluido esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p',`escoge un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //reiniciar condiciones iniciales
    condicionesIniciales();
    //reiniciar numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();
