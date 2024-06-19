document.getElementById('form_PesoIdeal').addEventListener('submit', function(event) {
    event.preventDefault();

    const sex = document.getElementById('sex').value;
    const ed = parseInt(document.getElementById('ed').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    let est = parseFloat(document.getElementById('est').value);

    let pesoIdeal, imc_5, calificacion;

    if (sex === 'hombre') {
        pesoIdeal = est - 100 - ((est - 150) / 4);
    } else if (sex === 'mujer') {
        pesoIdeal = est - 100 - ((est - 150) / 2);
    } else {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor seleccione su sexo.</div>';
        return;
    }

    est = est / 100; // Convertir estatura a metros
    imc_5 = pesoActual / (est * est);

    switch (true) {
        case (imc_5 < 18.5):
            calificacion = '<span class="badge text-bg-warning">Bajo peso</span>';
            break;
        case (imc_5 >= 18.5 && imc_5 < 24.9):
            calificacion = '<span class="badge text-bg-success">Peso normal</span>';
            break;
        case (imc_5 >= 25 && imc_5 < 29.9):
            calificacion = '<span class="badge text-bg-warning">Sobrepeso</span>';
            break;
        case (imc_5 >= 30 && imc_5 < 34.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 1</span>';
            break;
        case (imc_5 >= 35.0 && imc_5 < 39.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 2</span>';
            break;
        case (imc_5 >= 40.0):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 3</span>';
            break;
        default:
            calificacion = 'Valores de IMC no clasificados';
    }

    let mensajePeso;
    if (pesoActual < pesoIdeal) {
        mensajePeso = `Deberías aumentar: <span class="badge text-bg-primary">${(pesoIdeal - pesoActual).toFixed(1)} kilos</span>`;
    } else {
        mensajePeso = `Deberías perder: <span class="badge text-bg-dark">${(pesoActual - pesoIdeal).toFixed(1)} kilos</span>`;
    }


    document.getElementById('resultado').innerHTML =
        `<div class="alert alert-secondary" role="alert">
            <strong>Resultado:</strong><br>
            Edad: ${ed} años<br>
            Peso Actual: ${pesoActual} kilos<br>
            Estatura: ${est * 100} cm<br>
            IMC: ${imc_5.toFixed(1)} tiene ${calificacion}<br>
            Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)} kilos</span><br>
            ${mensajePeso}
        </div>`;
});