// Ejercico 1: Pedir nombre al usuario y saludarlo. Pasar el texto a Mayusculas y a Minusculas. Mostrar ambos en pantalla.

// let nombre=prompt("Ingrese nombre");
// let saludo='Hola '+nombre;
// alert(saludo);

// // en MAYUSCULAS 
// saludo = saludo.toUpperCase();
// console.log(saludo);

// // en minusculas 
// saludo = saludo.toLowerCase();
// console.log(saludo);

//Ejercicio 2: Pedir al usuario dos numeros y mostrar la suma y resta de ellos. 
//Para la resta, restar siempre al más grande el mas chico. 

// //suma//
//  let primerNum = prompt("Ingrese un número: ");
// let segundoNum = prompt("Ingrese un segundo número: ");
// let resultadoSuma = parseInt(primerNum) + parseInt(segundoNum);
// alert("La suma de tus número es: " + resultadoSuma);

// //resta//
// if (parseInt(primerNum) > parseInt(segundoNum)){
//     let resultadoResta = parseInt(primerNum) - parseInt(segundoNum);
//     alert("La resta de tus números es: " + resultadoResta);
// } else{
//     let resultadoResta = parseInt(segundoNum) - parseInt(primerNum);
//     alert("La resta de tus números es: " + resultadoResta);
// }
 
//Ejercicio 3: Ingresar un texto. Preguntar si quiere el resultado en pantalla (alert) o consola (console.log). 
//pasar el texto a MAYUSCULA y mostrar donde corresponda

// let texto = prompt("Ingrese un texto cualquiera: ");
// let primerPregunta = window.confirm("¿Desea ver el resultado en pantalla?");
// let segundaPregunta = window.confirm("¿Desea ver el resultado en consola?");
// if (primerPregunta == true){
//     texto = texto.toUpperCase();
//     alert(texto);
// } else if (segundaPregunta == true){
//     texto = texto.toUpperCase();
//     console.log(texto);
// } 

/* EJERCICIO 6: Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. */

// alert("Bienvenido/a al curso");
// const nuevosAlumnos = [];

// do {
//     let alumnos = prompt("Ingrese los nombres de los alumnos para el curso: ");
//     nuevosAlumnos.push(alumnos);
//     aviso = confirm("¿Faltan ingresar alumnos?");

// }  while (aviso == true);

// alert(nuevosAlumnos);


