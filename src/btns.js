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
//Toolzu, se llama a la funcion desde html con onclick
function toolzuSearch(){
    var usuario = document.getElementById('igToolzu').value;
    var toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${usuario}`;
    window.open(toolzuUrl, '_blank');
}
*/
//Instagram
const btn_ig = document.getElementById('btn_perfil_ig');
function abrirIg(){
    const usuarioIg = document.getElementById('igPerfil').value;
    const instagramUrl =`https://www.instagram.com/${usuarioIg}/`;
    window.open(instagramUrl, '_blank');
}
btn_ig.addEventListener('click', abrirIg);

//Toolzu
const btn_Toolzu = document.getElementById('btn_perfil_toolzu');
function abrirToolzu(){
    const usuarioIg = document.getElementById('igToolzu').value;
    const toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${usuarioIg}`;
    window.open(toolzuUrl, '_blank');
}
btn_Toolzu.addEventListener('click', abrirToolzu);

//Google Busqueda

