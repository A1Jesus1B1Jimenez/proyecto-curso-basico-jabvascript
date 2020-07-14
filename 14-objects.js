// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`; //this es usado para hacer referencia al objeto padre en este caso mi Auto
  }
};

miAuto.annio  //regresa el valor especifico de la palabra clave en este caso annio
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020); //new es un operador generauna nueva instancia en la funcion, una instancia es un objeto que deriva de otro objeto

var newAuto2 = new auto("tesla", "x", "2018");  //manera de agregar mas autos
var newAuto3 = new auto("toyota", "corolla", "2019");


//funcion para 30 autos

var marca = ["audi", "subaru", "mazda", "toyota", "ford", "ferrari", "porshe", "nissan", "gmc", "volvo","audi", "subaru", "mazda", "toyota", "ford", "ferrari", "porshe", "nissan", "gmc", "volvo", "audi", "subaru", "mazda", "toyota", "ford", "ferrari", "porshe", "nissan", "gmc", "volvo"];

var modelo =["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5",]

var annio = ["2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018"];

var listaAutos = [];


function auto(marca, modelo, annio) {  
  this.marca = marca;   
  this.modelo = modelo;
  this.annio = annio;
}

for (var i = 0; i < 30; i++) {
  var newAuto = new 
  auto(marca[i], modelo[i], annio[i]);
  listaAutos.push(newAuto)
}