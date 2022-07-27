// Siempre usar const para seleccionar elementos

const body = document.querySelector("body");

const h1_title = document.querySelector("h1");
const p = document.querySelector("p");
const p_clase = document.querySelector(".parrafo");
const idp = document.querySelector("#idp");
const inputt = document.querySelector("input[type=text]");
const atr = document.querySelector("p.atr");

//Propiedades de cada elemento son propiedades de objeto tipo css o elemento html
console.log(inputt.placeholder); 
//-Aunque los atributos sean inventados, se puede obtener los atributos con getAtribute
console.log(atr.getAttribute("atributo")); // atributo="atr" en el html

//Si se usa .setAttribute se puede cambiar
console.log(atr.getAttribute("atr-2"));
atr.setAttribute("atr-2", "sata") // (atributo, valor)
console.log(atr.getAttribute("atr-2"));

//Se pueden modificar las clases con classList
p_clase.classList.add("n-clas"); //Añadir clase

p_clase.classList.add("m-clas"); // Añadir otra
p_clase.classList.remove("m-clas"); // Eliminarla

// Se pueden crear elementos nuevos con createElement
console.log(document.createElement('span')); //Así se ve el elemento creado
let ruta = "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gwyn_Lord_of_Sunlight.jpg?v=1528544832709";

const img = document.createElement('img');
img.setAttribute("src", ruta);
img.width = 1280;
img.height = 720;
console.log(img);

body.append(img);


/*
//Si se ponen llaves con un conjunto de variables, JS lo lee como un objeto list
console.log({
   h1_title,
   p,
   p_clase,
   idp,
   inputt
});
*/