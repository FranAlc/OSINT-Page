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

//Toolzu otra forma diferente de realizar la accion de envio en un btn
function toolzuSearch(){
    var usuario = document.getElementById('igToolzu').value;
    var toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${usuario}`;
    window.open(toolzuUrl, '_blank');
}

