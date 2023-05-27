var claves = ["ai", "enter", "imes", "ober", "ufat"];
var letras = ["a", "e", "i", "o", "u"];

function buscador(letra, desencriptando) {
    var desencriptando = false;
    var encontrada = false;
    for (var i = 0; i < letras.length; i++) {
        if (letra == letras[i]) {
            //document.write("la clave es "+ claves[i])
            return (claves[i]);
            encontrada = true;
        }
    }
    if (encontrada == false) {
        //document.write("la clave no existe");
        return (letra);
    }
}

function encriptar(frase) {
    var fraseEncriptada = [];
    for (var i = 0; i < frase.length; i++) {

        fraseEncriptada.push(buscador(frase[i]));

    }
    mensajeResultado.textContent=fraseEncriptada.join("");

    mensajeResultado.style.backgroundImage="none";
}

function desencriptar(frase) {
    var fraseEncriptada = [];
    var claveTamano;
    var i = 0;


    while (i < frase.length) {
        fraseEncriptada.push(frase[i]);
        claveTamano = buscador(frase[i]);
        i += claveTamano.length;
        console.log(i)
    }
    mensajeResultado.textContent=fraseEncriptada.join("");
    mensajeResultado.style.backgroundImage="none";
}

function noDetectoTexto(){
    mensajeResultado.textContent="Ningún mensaje fue encontrado\n"+
        "Ingresa el texto que desees encriptar o desencriptar."
    mensajeResultado.style.backgroundImage="url('muneco.png')";
}
function empezarEncriptar(){


    if(frase.value.length>0){
    encriptar(frase.value);}
    else
        noDetectoTexto();
}
function empezarDesencriptar(){
    if(frase.value.length>0){
    desencriptar(frase.value);}
    else
        noDetectoTexto();

}

function copiar(){
    mensajeResultado.select();
    navigator.clipboard.writeText(mensajeResultado.value);
}


var botonCopiar= document.querySelector(".boton-copiar")
var frase = document.querySelector(".text-area");
var mensajeResultado=document.querySelector(".text-encriptado");
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar=document.querySelector(".boton-desencriptar")
botonEncriptar.onclick=empezarEncriptar;
botonDesencriptar.onclick=empezarDesencriptar;
botonCopiar.onclick= copiar;