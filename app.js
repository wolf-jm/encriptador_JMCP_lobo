function encriptar() {
    let texto = document.getElementById("texto_a_encriptar").value;
    if (!texto.match(/^[a-z\s]*$/)) {
        alert("El texto debe estar en minúsculas y sin caracteres especiales.");
        return;
    }

    // Mapeo de vocales y sus reemplazos
    const mapeoEncriptado = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Reemplazar vocales según el mapeo
    let encriptado = texto.replace(/[aeiou]/g, function(match) {
        return mapeoEncriptado[match];
    });

    mostrarResultado(encriptado);
}

function desencriptar() {
    let texto = document.getElementById("texto_a_encriptar").value;

    // Mapeo de reemplazos y sus vocales originales
    const mapeoDesencriptado = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Reemplazar los patrones encriptados por las vocales originales
    let desencriptado = texto
        .replace(/ai|enter|imes|ober|ufat/g, function(match) {
            return mapeoDesencriptado[match];
        });

    mostrarResultado(desencriptado);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("resultado");
    let placeholder = document.getElementById("placeholder");

    if (texto.trim() === "") {
        placeholder.style.display = "block";
        resultado.textContent = "";
    } else {
        placeholder.style.display = "none";
        resultado.textContent = texto;
    }
}

function copiar() {
    let resultado = document.getElementById("resultado").textContent;

    if (resultado) {
        navigator.clipboard.writeText(resultado).then(() => {
            alert("Texto copiado al portapapeles.");
        });
    } else {
        alert("No hay texto para copiar.");
    }
}