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

//Google Búsqueda
const btn_google = document.getElementById('btn_busqueda_google');
function abrirGoogle(){
    const usuarioIg = document.getElementById('busquedaGoogle').value;
    const googleUrl = `https://www.google.com/search?q=site%3Ainstagram.com+%22${usuarioIg}%22`;
    window.open(googleUrl, '_blank');
}
btn_google.addEventListener('click', abrirGoogle);

//Bing Búsqueda
const btn_bing = document.getElementById('btn_busqueda_bing');
function abrirBing(){
    const usuarioIg = document.getElementById('busquedaBing').value;
    const bingUrl = `https://www.bing.com/search?q=site%3Ainstagram.com+%22${usuarioIg}%22`;
    window.open(bingUrl, '_blank');
}
btn_bing.addEventListener('click', abrirBing);

//Hashtag Instagram

function buscarHashtag(){
    const usuarioIg = document.getElementById('hashIg').value;
    const hashtagUrl = `https://www.instagram.com/explore/tags/${usuarioIg}/`;
    window.open(hashtagUrl, '_blank');
}
const btn_hashtag_ig = document.getElementById('btn_hashtag_ig');
btn_hashtag_ig.addEventListener('click', buscarHashtag);

//Hashtag Dumpor
function buscarHashtagDumpor(){
    const usuarioIg = document.getElementById('hashDumpor').value;
    const hashtagUrl = `https://dumpoir.com/t/${usuarioIg}`;
    window.open(hashtagUrl, '_blank');
}
const btn_hashtag_dumpor = document.getElementById('btn_hashtag_dumport');
btn_hashtag_dumpor.addEventListener('click', buscarHashtagDumpor);
