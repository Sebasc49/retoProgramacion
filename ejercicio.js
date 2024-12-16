
let numero = parseInt(prompt('Ingresa un numero: '))

// Almacenaremos los datos que vamos a solicitar 
let fibonacci = operacionFibonacci(numero);

// Crearemos una funcion 
function operacionFibonacci(n){

    const secuencia = [];
    if (n <= 0){
        alert('Numero invalido')
        location.reload();
    }
    let a = 0;
     // Poner los valores que son iniciales para poder crear la secuencia
    let b = 1;

    // 3.3 Operacion de la secuencia
    while(a <= n){
        //Agregamos el numero a la secuencia
        secuencia.push(a);
        // Aqui la variable tomaria el valor de lo que es a+b
        let siguiente = a + b; 
        //Actualizamos el valor del primer numero al que le sigue despues 
        a = b; 
        // Actualizar el siguiente valor segun la variable correspondiente
        b = siguiente; 
    }

    return secuencia;
}

  // Ponemos algun texto con el numero del prompt
resultado.textContent = (`secuencia de Fibonacci hasta el número ${numero}:`); 
numero1.textContent = (`${fibonacci.join(', ')}`);