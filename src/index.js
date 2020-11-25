import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JavaScript</h1>
<div>
  Objetos
  
</div>
`;

//OBJETOS

const filosofos = {
  nombre: "sartre",
  pais: "francia",
  corriente: "existencialismo"
};
console.log(filosofos);
console.log(filosofos.corriente);

//lo mismo pero agregando fuera del objeto  elemento con el nombre
const idealistas = {
  nombre: "fichte",
  pais: "alemania",
  libro: "doctrina de la ciencia"
};
console.log(idealistas);
console.log(idealistas.corriente);
idealistas.siglo = 19;

// lo mismo pero agregando un array
const logica = {
  origen: "logos",
  matematica: "russell",
  libro: "principia-mathematica",
  representantes: ["frege, cantor, bole"] //aqui el array
};
console.log(logica);
console.log(logica.corriente);
