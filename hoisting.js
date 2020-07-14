// hosting= es cuando las variables y funciones se declaran antes de procesar cualquier tipo de codigo



var minombre = undefined;

console.log(minombre);

minombre = "Andony"


hey();

function hey() {
    console.log ("hola" + minombre);
}

var minombre = "Andony"

// coercion implicita
var a = 4+ "7" //string "47"
var b = 4 * "7" //number 28

// coercion explicita
var a = 20;
var b = a + "";
// typeof(b) String

var c = String(a);
var d = Number(c);




