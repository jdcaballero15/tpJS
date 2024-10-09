//Ejercicio 2
let a = 5
let b = 10
let c = a+b
console.log("La suma de a y b: "+c)

//Ejercicio 3

let nombre = prompt("¿Cual es tu nombre?: ")
console.log("Hola," + nombre)

//Operadores logicos y condicionales
let numero1 = prompt("Ingrese el primer Numero :")
let numero2 = prompt("Ingrese el segundo Numero :")

if(numero1 > numero2){
  console.log("El mayor es: " + numero1)
}else{
  console.log("El mayor es: " + numero2)
}

//Numero impar/par
let parimpar = prompt("Ingrese un numero par o impar :")

if(parimpar % 2 == 0){
  console.log("El numero "+ parimpar+ " es par")
}else{
  console.log("El numero "+ parimpar+ " es impar")
}
  
//Ejercicio bucle
let variable = 10;
for(let i= variable ; i>=0 ; i--){
  console.log(i)
}

//Ejercicio do while
let number
do{

 number = prompt("Ingrese un numero mayor a 100: ")
 number = Number(numberdos)

}while(numberdos <= 100)

console.log("Ingresaste un numero mayor a 100: "+ numberdos)


//Ejercicio funcionpar/impar

function esPar( numero){

  if(numero % 2 == 0){
    return true;
  }else{
    return false;
  }

}

console.log("El numero 8 es par : " + esPar(8))
console.log("El numero 7 es par : " + esPar(7))

//Funcion farenheit

function convertirCelsiusAFahrenheit(celsius){
  let F = celsius * 1.8 + 32
  return console.log(celsius + "C son equivalentes a " + F + "F")
  }
  
  convertirCelsiusAFahrenheit(35);
  convertirCelsiusAFahrenheit(20);
  convertirCelsiusAFahrenheit(-10);

//Objetos

let Persona = {
  nombre : "Rodrigo ",
  edad : 30,
  ciudad: "Las heras",

  cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad
        console.log("Nombre : " + Persona.nombre + 
  ", Edad : " + Persona.edad + " , Nueva ciudad: " + nuevaCiudad)
  }
}

console.log("Nombre : " + Persona.nombre + 
  ", Edad : " + Persona.edad + 
  ", Ciudad : " + Persona.ciudad
)

Persona.cambiarCiudad("Mendoza");

//Ejercicio libro
let libroInfo = {
  tituloLibro : "Cien Años de Soledad",
  autorLibro : "Gabriel García Márquez",
  añoPublicacion : 2015,

  esViejo : function(){
    let añoActual = new Date().getFullYear();
    let antiguedad = añoActual - this.añoPublicacion;

    if(antiguedad > 10){
      return console.log("El libro " + this.tituloLibro + " es antiguo:" + true);
    }else{
      return console.log("El libro " + this.tituloLibro + " es antiguo:" + false);
    }
  }
}

libroInfo.esViejo();

//Arrays

let listaNumeros = [1,2,3,4,5,6,7,8,9,10]

console.log(listaNumeros);

let numerosDobles = []

for (let i = 0; i < listaNumeros.length; i++) {
  numerosDobles[i] = listaNumeros[i] * 2
}
console.log(numerosDobles)

//Ejercicio pares

let numerosPares = []

for(let j = 1 ; j < 21 ; j++){
  if(j % 2 == 0){
    numerosPares.push(j);
  }
}

console.log(numerosPares)

//Ejercicoi DOM

const cambiarColorParrafo = () =>{

  let parrafos = document.querySelectorAll('p')

  parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue'
  })
}

const botonCambiarColor = document.getElementById("buttonColor");

botonCambiarColor.addEventListener("click", ()=>{

cambiarColorParrafo();

})

const obtenerTextoInput = () =>{

  const textoInput = document.getElementById("textInput").value;

  alert(textoInput)

}

const botonAlerta = document.getElementById("buttonAlert");

botonAlerta.addEventListener("click", ()=>{

  obtenerTextoInput()

})

const elementosLista = document.querySelectorAll("ul li")

elementosLista.forEach(elemento =>{
  elemento.addEventListener("click", ()=>{
    console.log(elemento.textContent)
  })
})

const inputEjemplo = document.getElementById("InputEj2")
const botonHabilitar = document.getElementById("habilitar")
const botonDeshabilitar = document.getElementById("deshabilitar")

botonDeshabilitar.addEventListener("click",() =>{
  inputEjemplo.disabled = true;
})

botonHabilitar.addEventListener("click",() =>{
  inputEjemplo.disabled = false;
})

const botonGuardarCorreo = document.getElementById("buttonGuardar")

const obtenerCorreoInput = () =>{

  const correoInput = document.getElementById("InputCorreo").value;

   document.getElementById("correoGuardado").textContent = correoInput

}

botonGuardarCorreo.addEventListener("click", () =>{

  obtenerCorreoInput();

})

const botonEliminarCorreo = document.getElementById("buttonDelete")

const eliminarCorreoGuardado = () =>{
  document.getElementById("correoGuardado").textContent = ""
}
botonEliminarCorreo.addEventListener("click", () => {
 eliminarCorreoGuardado();
})
