const autocompletarTodoButton = document.getElementById('autocompletarTodo');
const autocompletarInput = document.getElementById('autocompletar');

autocompletarTodoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const valorAutocompletar = autocompletarInput.value;

    document.getElementById('igPerfil').value = valorAutocompletar;
    document.getElementById('igToolzu').value = valorAutocompletar;
    document.getElementById('busquedaGoogle').value = valorAutocompletar;
    document.getElementById('busquedaBing').value = valorAutocompletar;
});

