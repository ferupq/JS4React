//console.log('hola')

//---funcion clasica---

//function suma(a,b){
//    return a+b;
//}

//---funcion fatArraow---
//const suma=(a,b)=>{
//    return a+b
//}

//---fat Arrow Function

//const suma= (a,b) => a+b

//console.log (suma(2,3));

/*const usuario = {
    nombre: 'ivan',
    apellido: 'guerra',
    edad: 36,
    direccion:{
        pais:'Mexico',
        cuidad:'qro',
        calle:'la misma'
    },
    amigos:['alex','carlos'],
    estatus: true, 
    enviaCorreo: enviaCorr=()=>'enviado'
}*/

// propiedades
// console.log(usuario)
// console.log(usuario.direccion.calle)
// console.log(usuario.amigos)

// Metodos
//console.log(usuario.enviaCorreo())

// Trabajo con DOM

/*const titulo = document.createElement('h1')
titulo.innerText= 'soy un titulo creado con 35'
document.body.append(titulo)

const boton= document.createElement('button')
button.innerText= 'presiona '
document.body.append(boton)

boton.addEventListener('cli',function(){
    //console.log('evento click ejecutando')
    titulo.innerText= 'evento click ejecutando'
    alert('exito')
}) */

/*const nombres= ['alan','isa','pablo']

for (let i= 0; i< nombres.length; i++){
    const elemento = nombres[i]
    console.log(elemetos)


}

nombres.forEach(funtion(nombre){
    console.log(nombre)

})*/

/*const array2= nombres.map(funtion(nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)*/

// Funcion find: ubicar elementos en el arreglo

/* const resultado = nombres.find(function(nombre){
    if (nombre === 'pablo')
        return nombre
})

console.log(resultado) */

// Funcion concat

/*const edades = [78,89,12,8,10,15]
console.log(nombres.concat(edades))

// Spread Operator 
console.log([...nombres,...edades])*/

// Modulos : import & export

//import {suma,resta} from "./calculadora"
//import * as calc from "./calculadora";

//confirm.log(suma(45, 54));
//confirm.log(resta(45, 5));

// let datos = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   //de la respuesta solo quiero el titulo
//   //.then((json) => console.log(json));
//   .then((data) => data.map((elemento) => elemento.title))
//   //la informacion necesito que se muetre en mi index.html
//   .then((data) => {
//     const lista = document.createElement("ul");
//     data.forEach((elemento) => {
//       const item = document.createElement("li");
//       item.innerText = elemento;
//       lista.append(item);
//     });
//     document.body.append(lista);
//   });

//ahora la quiero con async await

const cargarDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  try {
    const data = await response.json();
    const lista = document.createElement("ul");
    data.forEach((elemento) => {
      const campos = document.createElement("li");
      campos.innerText = elemento.title;
      lista.append(campos);
    });
    document.body.append(lista);
  } catch (error) {
    console.error("Hubo un Error Fernando", error);
  }
};

cargarDatos();
