const autocompletarTodoButton = document.getElementById('btn_autocompletar_ig');
const autocompletarInput = document.getElementById('autocompletarIg');


autocompletarTodoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const valorAutocompletar = autocompletarInput.value;

    document.getElementById('igPerfil').value = valorAutocompletar;
    document.getElementById('igToolzu').value = valorAutocompletar;
    document.getElementById('busquedaGoogle').value = valorAutocompletar;
    document.getElementById('busquedaBing').value = valorAutocompletar;
});

//Tw autocompletar
function autocompletarTw(event){
    event.preventDefault();//agrego metodo event y lo utilizo nuevamente.

    const autocompletarTw = document.getElementById('autocompletarTw').value;

    document.getElementById('twPerfil').value = autocompletarTw;
    document.getElementById('tweets').value = autocompletarTw;
    document.getElementById('twLike').value = autocompletarTw;
    document.getElementById('twRespuestas').value = autocompletarTw;
    document.getElementById('twSeguidores').value = autocompletarTw;
    document.getElementById('twSeguidos').value = autocompletarTw;
    document.getElementById('twWebCache').value = autocompletarTw;
    document.getElementById('twSocialBearing').value = autocompletarTw;
    document.getElementById('twGoogle').value = autocompletarTw;
    document.getElementById('twBing').value = autocompletarTw;
    document.getElementById('twTwitonomy').value = autocompletarTw;

}
const btn_autocompletar_tw = document.getElementById('btn_autocompletar_tw');
btn_autocompletar_tw.addEventListener('click', autocompletarTw);