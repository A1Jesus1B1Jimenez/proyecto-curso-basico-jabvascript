var numero = 1

switch (numero) {
    case 1: 
        console.log("soy un 1");
        break;       //se usa el break para detener la validacion y que no pase a los otros casos
    case 2:
        console.log("soy un 2");
        break;
    case 100:
        console.log("si soy un 100");
        break;
    default: // para finalizar y no validar nada
        console.log("no soy nada")
}