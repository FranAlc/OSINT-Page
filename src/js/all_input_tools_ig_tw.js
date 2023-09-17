//Ig autocompletar
function autocompletarIg(event){
    event.preventDefault();
    const autocompletarIg = document.getElementById('autocompletarIg').value;

    document.getElementById('igPerfil').value = autocompletarIg;
    document.getElementById('igToolzu').value = autocompletarIg;
    document.getElementById('busquedaGoogle').value = autocompletarIg;
    document.getElementById('busquedaBing').value = autocompletarIg;
}
const btn_autocompletar_ig = document.getElementById('btn_autocompletar_ig');
btn_autocompletar_ig.addEventListener('click', autocompletarIg);

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

