// elementos de HTML
//Busca el primer elemento que coincide con el selector CSS sel. Si no, devuelve Null
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



// funcion para el boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)

    //setear el valor del campo de texto
    mensaje.value = textoEncriptado
    //limpiar campo
    textArea.value = "";
    //quitar imagen
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
}

//funcion encriptar , llamado desde la funcion del boton encriptar
// se le pasa el valor del text-area
function encriptar(stringEncriptado){

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    // se puede observar en la consola del depurador de la pagina
    console.table(matrizCodigo)

    // se convierte todo a minusculas
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        //si la cadena contiene una vocal
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            //reemplazar todas las coincidencias replaceAll
            // replace - una sola coincidencia
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringEncriptado
}

//funcion desencriptar
function desencriptar(stringDesencriptado){

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }

    return stringDesencriptado
}

//funcion del boton copiar
function btnCopiar(){
    const textoCopiado = mensaje.value
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado)

}



