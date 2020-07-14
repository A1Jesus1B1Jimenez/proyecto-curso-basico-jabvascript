// existen dos tipos de funciones

//declarativas=son funciones que se declaran drectamente

function mifuntion () {
    return 3;
}

mifuntion();


// expresión=son funciones guardadas dentro de una variable y no tiene nombre propio

var mifuntion = function (a,b) {
    return a + b;
}

mifuntion();

// scope define el alcance de una variable, puede haber un scope globa=donde estaran las funciones y variables que se puedan usar afuera de funciones y el scope local= que son las variables dentro de funciones
