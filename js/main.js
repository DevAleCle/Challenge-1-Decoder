//INPUTS Y OUTPUTS
const textoUsr = document.getElementById("text-input");
const textoResul = document.getElementById("texto-resultante");

//CAMBIADORES DE ESTADO
const asideSinTexto = document.getElementById("sin-texto");
const asideConTexto = document.getElementById("con-texto");

//BOTONES
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");

function encriptarTexto() {
    let textoDesencriptado = new Array(),
        textoEncriptado = new Array();

    textoDesencriptado = textoUsr.value;

    for (let i = 0; i < textoDesencriptado.length; i++) {
        if (textoDesencriptado[i].toLowerCase() === "a") {
            textoEncriptado.push("ai");
        } else if (textoDesencriptado[i].toLowerCase() === "e") {
            textoEncriptado.push("enter");
        } else if (textoDesencriptado[i].toLowerCase() === "i") {
            textoEncriptado.push("imes");
        } else if (textoDesencriptado[i].toLowerCase() === "o") {
            textoEncriptado.push("ober");
        } else if (textoDesencriptado[i].toLowerCase() === "u") {
            textoEncriptado.push("ufat");
        } else {
            textoEncriptado.push(textoDesencriptado[i].toLowerCase());
        }
    }

    if (!asideSinTexto.classList.contains("toggle")) {
        asideSinTexto.classList.add("toggle");

        if (asideConTexto.classList.contains("toggle")) {
            asideConTexto.classList.remove("toggle");
        }
    }

    return (textoResul.value = textoEncriptado.join(""));
}

function desencriptarTexto() {
    let textoDesencriptado = new String(),
        textoEncriptado = new String();

    let claves = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

    textoEncriptado = textoUsr.value;

    textoDesencriptado = textoEncriptado.replace(
        /ai|enter|imes|ober|ufat/gi,
        function (matched) {
            return claves[matched];
        }
    );

    if (!asideSinTexto.classList.contains("toggle")) {
        asideSinTexto.classList.add("toggle");

        if (asideConTexto.classList.contains("toggle")) {
            asideConTexto.classList.remove("toggle");
        }
    }

    return (textoResul.value = textoDesencriptado);
}

function copiarTexto() {
    if (textoResul.value != "") {
        navigator.clipboard.writeText(textoResul.value);
    }

    alert("El texto fue copiado exitosamente!");
}

btnEncriptar.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiarTexto;
