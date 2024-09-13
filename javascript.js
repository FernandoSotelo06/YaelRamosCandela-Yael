// Lista de estudiantes
const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    
    if (nombre && !isNaN(calificacion)) {
        estudiantes.push({ nombre, calificacion });
        document.getElementById('nombre').value = '';
        document.getElementById('calificacion').value = '';
        alert('Estudiante agregado con éxito');
    } else {
        alert('Por favor, ingrese un nombre y una calificación válida.');
    }
}

function calcularPromedio() {
    const total = estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
    return total / estudiantes.length;
}

function mostrarResultados() {
    if (estudiantes.length < 5) {
        alert('Debe ingresar al menos 5 estudiantes para mostrar los resultados.');
        return;
    }

    const promedio = calcularPromedio();

    // Ordenar estudiantes por la diferencia con el promedio
    estudiantes.sort((a, b) => Math.abs(a.calificacion - promedio) - Math.abs(b.calificacion - promedio));

    // Seleccionar los 5 estudiantes con menor y mayor nota al promedio
    const estudiantesMenorPromedio = estudiantes.slice(0, 5);
    const estudiantesMayorPromedio = estudiantes.slice(-5);

    const menorPromedioDiv = document.getElementById('menor-promedio');
    const mayorPromedioDiv = document.getElementById('mayor-promedio');

    menorPromedioDiv.innerHTML = `<h3>Estudiantes con Menor Nota al Promedio</h3>${estudiantesMenorPromedio.map(estudiante => 
        `<p>${estudiante.nombre} - Calificación: ${estudiante.calificacion} (Diferencia al promedio: ${Math.abs(estudiante.calificacion - promedio).toFixed(2)})</p>`
    ).join('')}`;

    mayorPromedioDiv.innerHTML = `<h3>Estudiantes con Mayor Nota al Promedio</h3>${estudiantesMayorPromedio.map(estudiante => 
        `<p>${estudiante.nombre} - Calificación: ${estudiante.calificacion} (Diferencia al promedio: ${Math.abs(estudiante.calificacion - promedio).toFixed(2)})</p>`
    ).join('')}`;
}
