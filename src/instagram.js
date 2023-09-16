const autocompletarTodoButton = document.getElementById('autocompletarTodo');
const autocompletarInput = document.getElementById('autocompletar');

autocompletarTodoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const valorAutocompletar = autocompletarInput.value;

    document.getElementById('igPerfil').value = valorAutocompletar;
    document.getElementById('igToolzu').value = valorAutocompletar;
    document.getElementById('busquedaGoogle').value = valorAutocompletar;
    document.getElementById('busquedaBing').value = valorAutocompletar;
    document.getElementById('hashIg').value = valorAutocompletar;
    document.getElementById('hashDumpor').value = valorAutocompletar;
});

//Instagram
document.getElementById('btn_perfil_ig').addEventListener('click', function(){
    console.log("Boton envio..")
    var usuario = document.getElementById('igPerfil').value;
    if (usuario) {
        var instagramUrl = `https://www.instagram.com/${usuario}/`;
        window.open(instagramUrl, '_blank');
    }
});

//Toolzu
function redireccionar_usuario_toolzu(igToolzu){
    var toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${igToolzu}`;
    window.location.href = toolzuUrl;
}

document.getElementById('btn_perfil_toolzu').addEventListener('click', function(){
    var username2 = document.getElementById("igToolzu").value;
    if (username2){
        redireccionar_usuario_toolzu(username2);
    }
});
