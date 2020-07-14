// los ciclos se usan para  repetir tareas de forma automatica

var estudiantes = ["maria", "sergio", "rosa", "dany"];

function saludarEstudiantes(estudiante){
    console.log('hola, ${estudiante}');
}

//mientras i sea menor a estudiantes i aumentara 1
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["maria", "sergio", "rosa", "dany"];

function saludarEstudiantes(estudiante){
    console.log('hola, ${estudiante}');
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}








var estudiantes = ["maria", "sergio", "rosa", "dany"];

function saludarEstudiantes(estudiante){
    document.write('hola, ${estudiante}');
    document.write("<hr>");
}

//mientras i sea menor a estudiantes i aumentara 1
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]+ "<br>");
}


