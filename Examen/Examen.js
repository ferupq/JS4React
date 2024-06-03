// // //Primer Ejercicio
// numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

// const NPares = async () => {
//   let pares = [];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//       pares.push(numeros[i]);
//     }
//   }
//   return pares;
// };

// NPares().then((pares) => {
//   console.log(pares);
// });

// //Segundo Ejercicio

estudiantes = [
  { name: "Mane", age: 15 },
  { name: "Andrea", age: 22 },
  { name: "Alma", age: 19 },
  {
    name: "Emma",
    age: 29,
  },
  { name: "Maria ", age: 13 },
  { name: "Luis", age: 16 },
  { name: "Yair", age: 21 },
];

// II. Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
//nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años

const MEdad = async () => {
  let mayores = [];
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].age > 18) {
      mayores.push(estudiantes[i].name);
    }
  }
  return mayores;
};

MEdad().then((mayores) => {
  console.log(mayores);
});
