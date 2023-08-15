let nombreIngresado = prompt ("Ingrese su nombre");

if ((nombreIngresado != "")){
    alert (`¡Hola, ${nombreIngresado}! Bienvenido/a.`);
} else{
    alert ("ERROR: Ingresa tu nombre");
}

let entrada = prompt ("¿Qué te interesa comprar? Selecciona del 1 al 4 \n1-Remera \n2-Jeans \n3-Camisa \n4-Pollera");
let ingresados ="";
while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            alert ("Remera $1200");
            break;
            case "2":
            alert ("Jeans $3000");
            break;
            case "3":
            alert ("Camisa $2400");
            break;
            case "4":
            alert ("Pollera $2800");
            break;
            default:
                alert ("Error");
                break;
    }
    entrada=prompt ("Selecciona del 1 al 4 \n1-Remera \n2-Jeans \n3-Camisa \n4-Pollera");
}

function calcularCuotas (resultado){
    let cuotas =Number(prompt("Ingrese la cantidad de cuotas en las que va a pagar \n3 \n6 \n12"));
    while (trueOrFalse){ 
        const tasaCalculada = tasa (resultado)
        let resultadoFinal = 0;
            switch (cuotas) {
                case 3:
                    resultadoFinal = Math.round(tasaCalculada / cuotas);
                    alert ('El monto de las cuotas es ${resultadoFinal}');
                    trueOrFalse=false;
                    break;
                    case 6:
                    resultadoFinal = Math.round(tasaCalculada / cuotas);
                    alert ('El monto de las cuotas es ${resultadoFinal}');
                    trueOrFalse=false;
                    break;
                    case 12:
                    resultadoFinal = Math.round(tasaCalculada / cuotas);
                    alert ('El monto de las cuotas es ${resultadoFinal}');
                    trueOrFalse=false;
                    break;
                    default:
                        alert ("Ingrese una cantidad de cuotas válida");
                        break;
            }
         }
     }
     

/*
let trueOrFalse = true;
function calcularPrestamo(){
    const prestamo = Number (prompt("Ingrese el monto del prestamo"));
    while (trueOrFalse){
        if(isNaN(prestamo) || prestamo === 0) {
        alert ("Ingrese un monto valido");
    }else{
        let resultado = iva (prestamo);
        calcularCuotas(resultado);
        trueOrFalse=false;
    }
    }
}

 const iva = (prestamo)=> prestamo * 1.21;
 const tasa = function (prestamo){
    if(prestamo > 10000){
        return prestamo * 1.45;
    }else{
        return prestamo * 1.30;
    }
 }

 function calcularCuotas (resultado){
    let cuotas =Number(prompt("Ingrese la cantidad de cuotas \n3 \n6 \n12"));
    while (trueOrFalse){ 
    const tasaCalculada = tasa (resultado)
    let resultadoFinal = 0;
        switch (cuotas) {
            case 3:
                resultadoFinal = Math.round(tasaCalculada / cuotas);
                alert ('El monto de las cuotas es ${resultadoFinal}');
                trueOrFalse=false;
                break;
                case 6:
                resultadoFinal = Math.round(tasaCalculada / cuotas);
                alert ('El monto de las cuotas es ${resultadoFinal}');
                trueOrFalse=false;
                break;
                case 12:
                resultadoFinal = Math.round(tasaCalculada / cuotas);
                alert ('El monto de las cuotas es ${resultadoFinal}');
                trueOrFalse=false;
                break;
                default:
                    alert ("Ingrese una cantidad de cuotas válida");
                    break;
        }
     }
 }
 
 calcularPrestamo ()
 */