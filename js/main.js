function edad_promedio(){
    //Inicio del sistema
    //Variables de entrada:
    const edad = parseFloat(document.getElementById("edad").value);
    let resultado1;

    if (edad <= 12) {
        document.getElementById("resultado1").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Eres un niño. &nbsp;<img src='img/chico.png'></div>"; //Salida
    } else if (edad >= 13 && edad < 18) {
        document.getElementById("resultado1").innerHTML = "<div class='alert alert-secondary' role='alert'><strong>Respuesta:</strong> Eres un Adolescente. &nbsp;<img src='img/adolescente.png'></div>"; //Salida
    } else if (edad >= 18 && edad <= 59) {
        document.getElementById("resultado1").innerHTML = "<div class='alert alert-light' role='alert'><strong>Respuesta:</strong> Eres un Adulto. &nbsp;<img src='img/pareja.png'></div>"; //Salida
    } else if (edad >= 60) {
        document.getElementById("resultado1").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Eres un Adulto Mayor. &nbsp;<img src='img/caballero.png'></div>"; //Salida
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById("resultado1").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> Error al leer los datos; porfavor escriba su edad correcta &nbsp;<img src='img/advertencia.png'></div>";
    }
}

function peso_altura(){
    //Inicio del sistema
    //Variables de entrada:
    const sexo = document.getElementById("sexo").value;
    const edad2 = parseInt(document.getElementById("edad2").value); 
    let resultado2;

    if ((sexo == "Hombre" || sexo == "hombre") && edad2 >= 11 && edad2 <= 14) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de " + edad2 + " años, Tienes un Peso de 45Kg y una altura de 157cm. &nbsp;<img src='img/hombre.png'></div>"; //Salida
    } else if ((sexo == "Hombre" || sexo == "hombre") && edad2 >= 15 && edad2 <= 18) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de " + edad2 + " años, Tienes un Peso de 66Kg y una altura de 176cm. &nbsp;<img src='img/hombre.png'></div>"; //Salida
    } else if ((sexo == "Hombre" || sexo == "hombre") && edad2 >= 19 && edad2 <= 24) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de " + edad2 + " años, Tienes un Peso de 72Kg y una altura de 177cm. &nbsp;<img src='img/hombre.png'></div>"; //Salida
    } else if ((sexo == "Hombre" || sexo == "hombre") && edad2 >= 25 && edad2 <= 50) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de " + edad2 + " años, Tienes un Peso de 79Kg y una altura de 176cm. &nbsp;<img src='img/hombre.png'></div>"; //Salida
    } else if ((sexo == "Hombre" || sexo == "hombre") && edad2 >= 51) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de " + edad2 + " años, Tienes un Peso de 77Kg y una altura de 173cm. &nbsp;<img src='img/hombre.png'></div>"; //Salida
    } else if ((sexo == "Mujer" || sexo == "mujer") && edad2 >= 11 && edad2 <= 14) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de " + edad2 + " años, Tienes un Peso de 46Kg y una altura de 157cm. &nbsp;<img src='img/mujer.png'></div>"; //Salida
    } else if ((sexo == "Mujer" || sexo == "mujer") && edad2 >= 15 && edad2 <= 18) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de " + edad2 + " años, Tienes un Peso de 55Kg y una altura de 163cm. &nbsp;<img src='img/mujer.png'></div>"; //Salida
    } else if ((sexo == "Mujer" || sexo == "mujer") && edad2 >= 19 && edad2 <= 24) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de " + edad2 + " años, Tienes un Peso de 58Kg y una altura de 164cm. &nbsp;<img src='img/mujer.png'></div>"; //Salida
    } else if ((sexo == "Mujer" || sexo == "mujer") && edad2 >= 25 && edad2 <= 50) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de " + edad2 + " años, Tienes un Peso de 63Kg y una altura de 163cm. &nbsp;<img src='img/mujer.png'></div>"; //Salida
    } else if ((sexo == "Mujer" || sexo == "mujer") && edad2 >= 51) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de " + edad2 + " años, Tienes un Peso de 65Kg y una altura de 160cm. &nbsp;<img src='img/mujer.png'></div>"; //Salida
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> El sexo y la edad son incorrectos &nbsp;<img src='img/advertencia.png'></div>";
    }
}

function calcular_indice(){
    //Inicio del sistema
    //Variables de entrada:
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    let resultado3;

    const imc = (peso / (estatura * estatura))*10000;

    if (imc < 18.5) {
        document.getElementById("resultado3").innerHTML = "<div class='bajo-p alert' role='alert'><strong>Respuesta:</strong> Usted tiene Bajo Peso.</div>"; //Salida
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado3").innerHTML = "<div class='p-normal alert' role='alert'><strong>Respuesta:</strong> Usted tiene un peso NORMAL.</div>"; //Salida
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultado3").innerHTML = "<div class='sobre-p alert' role='alert'><strong>Respuesta:</strong> Usted tiene SOBREPESO.</div>"; //Salida
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("resultado3").innerHTML = "<div class='obed-1 alert' role='alert'><strong>Respuesta:</strong> Usted tiene OBESIDAD 1.</div>"; //Salida
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("resultado3").innerHTML = "<div class='obed-2 alert' role='alert'><strong>Respuesta:</strong> Usted tiene OBESIDAD 2.</div>"; //Salida
    } else if (imc >= 40 && imc <= 49.9) {
        document.getElementById("resultado3").innerHTML = "<div class='obed-3 alert' role='alert'><strong>Respuesta:</strong> Usted tiene OBESIDAD 3.</div>"; //Salida
    } else if (imc >= 50) {
        document.getElementById("resultado3").innerHTML = "<div class='obed-4 alert' role='alert'><strong>Respuesta:</strong> Usted tiene OBESIDAD 4.</div>"; //Salida
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById("resultado3").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> Error al leer los datos ingresados. &nbsp;<img src='img/advertencia.png'></div>";
    }
}

function presion_arterial(){
    //Inicio del sistema
    //Variables de entrada:
    const presion = parseFloat(document.getElementById("presion").value);
    let resultado4;

    if (presion < 90) {
        document.getElementById("resultado4").innerHTML = "<div class='p-baja alert' role='alert'><strong>Respuesta:</strong> Usted tiene la presion BAJA</div>"; //Salida
    } else if (presion < 120) {
        document.getElementById("resultado4").innerHTML = "<div class='pp-normal alert' role='alert'><strong>Respuesta:</strong> Usted tiene la presion NORMAL</div>"; //Salida
    } else if (presion >= 120 && presion <= 139) {
        document.getElementById("resultado4").innerHTML = "<div class='sobre-p alert' role='alert'><strong>Respuesta:</strong> Usted tiene PREHIPERTENSION</div>"; //Salida
    } else if (presion >= 140 && presion <= 159) {
        document.getElementById("resultado4").innerHTML = "<div class='fase-1 alert' role='alert'><strong>Respuesta:</strong> Usted tiene PREHIPERTENSION Fase 1.</div>"; //Salida
    } else if (presion >= 160) {
        document.getElementById("resultado4").innerHTML = "<div class='fase-2 alert' role='alert'><strong>Respuesta:</strong> Usted tiene PREHIPERTENSION Fase 2.</div>"; //Salida
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById("resultado4").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> Error al leer los datos. &nbsp;<img src='img/advertencia.png'></div>";
    }
}

