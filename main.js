const pasoApaso = (expresion) => {
    expresion = expresion.replace(/\s+/g, '');

    const elementos = expresion.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

    if (!elementos) {
        Swal.fire({icon: "error",text: "Expresión no válida"});
        return;
    }

    document.getElementById('expresion').textContent = elementos.join(" ");

    let resultado = parseFloat(elementos[0]);
    let span = document.createElement('span');

    for (let i = 1; i < elementos.length; i += 2) {
        const operador = elementos[i];
        const numero = parseFloat(elementos[i + 1]);

        if (operador == '+') {
            span.innerHTML += `<span class="text-white">${resultado} + ${numero} = ${resultado + numero}</span><br>`;
            document.getElementById('resultados').append(span);
            resultado += numero;
        } else if(operador == '-') {
            span.innerHTML += `<span class="text-white">${resultado} - ${numero} = ${resultado - numero}</span><br>`;
            document.getElementById('resultados').append(span);
            resultado += numero;
        } else if(operador == '*') {
            span.innerHTML += `<span class="text-white">${resultado} * ${numero} = ${resultado * numero}</span><br>`;
            document.getElementById('resultados').append(span);
            resultado += numero;
        } else if(operador == '/') {
            if (numero !== 0) {
                span.innerHTML = `<span class="text-white">${resultado} / ${numero} = ${resultado / numero}</span><br>`;
                document.getElementById('resultados').append(span);
                resultado += numero;
            } else {
                Swal.fire({icon: "error",text: "Error: División por cero no permitida."});
                return;
            }
        } else {
            Swal.fire({icon: "error",text: "Operador no válido."});
        }
    }
    span.innerHTML += `<span class="text-white">${resultado}</span>`;
    document.getElementById('resultados').append(span);
}

document.getElementById('btn').addEventListener('click',() => {
    let expresion = document.getElementById('operacion').value;
    pasoApaso(expresion);
    document.getElementById('operacion').value = '';
});
