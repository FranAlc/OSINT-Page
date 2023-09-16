
    // Obtén una referencia al botón "Completar todo" y al campo de entrada que deseas autocompletar
    const autocompletarTodoButton = document.getElementById('autocompletarTodo');
    const autocompletarInput = document.getElementById('autocompletar');

    // Agrega un controlador de eventos para el clic en el botón "Completar todo"
    autocompletarTodoButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        
        // Obtén el valor del campo de entrada "All"
        const valorAutocompletar = autocompletarInput.value;

        // Autocompleta los campos de entrada correspondientes
        document.getElementById('igPerfil').value = valorAutocompletar;
        document.getElementById('igToolzu').value = valorAutocompletar;
        document.getElementById('busquedaGoogle').value = valorAutocompletar;
        document.getElementById('busquedaBing').value = valorAutocompletar;
        document.getElementById('hashIg').value = valorAutocompletar;
        document.getElementById('hashDumpor').value = valorAutocompletar;
    });

document.getElementById('btn_perfil_ig').addEventListener('click', function(){
        console.log("Boton envio..")
        var usuario = document.getElementById('igPerfil').value;
        if (usuario) {
            var instagramUrl = `https://www.instagram.com/${usuario}/`;
            window.open(instagramUrl, '_blank');
        }
});
    

//Redireccionamiento a Toolzu
function redireccionar_usuario_toolzu(igToolzu){
    var toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${username}`;
    window.location.href = toolzuUrl;
}

document.getElementById('btn_perfil_toolzu').addEventListener('click', function(){
      var username2 = document.getElementById("igToolzu").value;
    if (username2){
    redireccionar_usuario_toolzu(username2);
    }
})

