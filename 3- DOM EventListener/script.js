/*
Se puede realizar eventos de JS en html por medio de 3 formas.

1- Por medio de eventos embebidos en el elemento, de dos formas:
      <elemento  onclick="JS que se va a ejecutar"></elemento>
      
2- Por medio de funciones declarativas para luego usarlas embebidas:
   function abc(){ 
      console.log("idk")
   }
   <elemento  onclick="abc()"></elemento>

3- Por medio de funciones expresivas, lambda, anónimas o como se les llame usando "addEventListener".

En este ejemplo lo hice con funciones expresivas y addEventListener
*/

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcular = document.getElementById("calculo");
const resultado = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");

calcular.addEventListener('click', sum); //addEventListener usa dos parámetros ('evento', función a ejecutar).
//La función a ejecutar puede ser como función declarativa o una función anónima. Si es declarativa es sin paréntesis

function sum(){
   n1 = parseInt(num1.value);
   n2 = parseInt(num2.value);
   resultado.value = (n1 + n2);

   resultado2.innerText = "Concatenado = " + (num1.value + num2.value);

}