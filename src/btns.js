//Botones
//Instagram opcion 1
/*document.getElementById('btn_perfil_ig').addEventListener('click', function(){
    console.log("Boton envio..")
    var usuario = document.getElementById('igPerfil').value;
    if (usuario) {
        var instagramUrl = `https://www.instagram.com/${usuario}/`;
        window.open(instagramUrl, '_blank');
    }
});
*/
//Instagram opcion2
const btn_ig = document.getElementById('btn_perfil_ig');
function abrirIg(){
    const usuarioIg = getElementById('igPerfil').value;
    const instagramUrl =`https://www.instagram.com/${usuarioIg}/`;
    window.open(instagramUrl, '_blank');
}
btn_ig.addEventListener('click', abrirIg());

//Toolzu, se llama a la funcion desde html con onclick
/*function toolzuSearch(){
    var usuario = document.getElementById('igToolzu').value;
    var toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${usuario}`;
    window.open(toolzuUrl, '_blank');
}*/

