//////////////////////////Instagram/////////////////////////////
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

function abrirIg(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('igPerfil').value;
    const instagramUrl =`https://www.instagram.com/${usuarioIg}/`;
    window.open(instagramUrl, '_blank');
}
const btn_ig = document.getElementById('btn_perfil_ig');
btn_ig.addEventListener('click', abrirIg);

//Toolzu
const btn_Toolzu = document.getElementById('btn_perfil_toolzu');
function abrirToolzu(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('igToolzu').value;
    const toolzuUrl = `https://toolzu.com/profile-analyzer/instagram/?username=${usuarioIg}`;
    window.open(toolzuUrl, '_blank');
}
btn_Toolzu.addEventListener('click', abrirToolzu);

//Google Búsqueda
const btn_google = document.getElementById('btn_busqueda_google');
function abrirGoogle(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('busquedaGoogle').value;
    const googleUrl = `https://www.google.com/search?q=site%3Ainstagram.com+%22${usuarioIg}%22`;
    window.open(googleUrl, '_blank');
}
btn_google.addEventListener('click', abrirGoogle);

//Bing Búsqueda
const btn_bing = document.getElementById('btn_busqueda_bing');
function abrirBing(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('busquedaBing').value;
    const bingUrl = `https://www.bing.com/search?q=site%3Ainstagram.com+%22${usuarioIg}%22`;
    window.open(bingUrl, '_blank');
}
btn_bing.addEventListener('click', abrirBing);

//Hashtag Instagram

function buscarHashtag(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('hashIg').value;
    const hashtagUrl = `https://www.instagram.com/explore/tags/${usuarioIg}/`;
    window.open(hashtagUrl, '_blank');
}
const btn_hashtag_ig = document.getElementById('btn_hashtag_ig');
btn_hashtag_ig.addEventListener('click', buscarHashtag);

//Hashtag Dumpor
function buscarHashtagDumpor(event){
    event.preventDefault();
    const usuarioIg = document.getElementById('hashDumpor').value;
    const hashtagUrl = `https://dumpoir.com/t/${usuarioIg}`;
    window.open(hashtagUrl, '_blank');
}
const btn_hashtag_dumpor = document.getElementById('btn_hashtag_dumport');
btn_hashtag_dumpor.addEventListener('click', buscarHashtagDumpor);

//////////////////////////Twitter/////////////////////////////

//Ver perfil
function abrirPerfilTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twPerfil').value;
    const usuarioTwUrl = `https://twitter.com/${usuarioTw}`;
    window.open(usuarioTwUrl, '_blank');
}
const btn_perfil_tw = document.getElementById('btn_perfil_tw');
btn_perfil_tw.addEventListener('click', abrirPerfilTw);

//Ver los tweets
function abrirTwSalientes(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('tweets').value;
    const tweetsUrl = `https://twitter.com/search?q=to%3A${usuarioTw}&f=live`;
    window.open(tweetsUrl, '_blank') 
}
const btn_ver_tws = document.getElementById('btn_tweets');
btn_ver_tws.addEventListener('click', abrirTwSalientes);

//Tweets Likeados
function abrirTwLikeados(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twLike').value;
    const tweetsUrl = `https://twitter.com/${usuarioTw}/likes/`;
    window.open(tweetsUrl, '_blank') 
}
const btn_busqueda_likes_Tw = document.getElementById('btn_busqueda_likes_Tw');
btn_busqueda_likes_Tw.addEventListener('click', abrirTwLikeados);


//Respuesta a tweets
function abrirTwReplies(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twRespuestas').value;
    const repliesTwUrl = `https://twitter.com/${usuarioTw}/with_replies`;
    window.open(repliesTwUrl, '_blank');
}
const btn_replies = document.getElementById('btn_busqueda_respuestas_Tw');
btn_replies.addEventListener('click', abrirTwReplies);

//Seguidores
function abrirSeguidoresTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twSeguidores').value;
    const seguidoresUrl = `https://twitter.com/${usuarioTw}/followers`;
    window.open(seguidoresUrl, '_blank');
}
const btn_buscar_seguidores = document.getElementById('btn_busqueda_seguidores_Tw');
btn_buscar_seguidores.addEventListener('click', abrirSeguidoresTw);
//Seguidos
function abrirSeguidosTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twSeguidos').value;
    const seguidosUrl = `https://twitter.com/${usuarioTw}/following`;
    window.open(seguidosUrl, '_blank');
}
const btn_buscar_seguidos = document.getElementById('btn_busqueda_seguidos_Tw');
btn_buscar_seguidos.addEventListener('click', abrirSeguidosTw);

//WebCache
function abrirWebCacheTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twWebCache').value;
    const webCacheUrl = `https://webcache.googleusercontent.com/search?q=cache:https://twitter.com/${usuarioTw}`; //version no actualizada
    window.open(webCacheUrl, '_blank');
}
const btn_abrir_webCacheTw = document.getElementById('btn_busqueda_webCache_Tw');
btn_abrir_webCacheTw.addEventListener('click', abrirWebCacheTw);

//SocialBearing Perfil
function abrirSocialBearingTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twSocialBearing').value;
    const repliesTwUrl = `https://socialbearing.com/search/user/${usuarioTw}`;
    window.open(repliesTwUrl, '_blank');
}
const btn_socialBearingTw = document.getElementById('btn_busqueda_socialBearing_Tw');
btn_socialBearingTw.addEventListener('click', abrirSocialBearingTw);

//Google busqueda
function abrirBuscadorGoogle(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twGoogle').value;
    const googleTwUrl = `https://www.google.com/search?q=twitter+${usuarioTw}&sca_esv=565986362&sxsrf=AM9HkKkTmzC38psQ4Y7x5WSxR7W0a8wuLA%3A1694908110056&ei=zj4GZe-HA-fW5OUPhvOCiAs&ved=0ahUKEwjvps7eqLCBAxVnK7kGHYa5ALEQ4dUDCA8&uact=5&oq=twitter+${usuarioTw}&gs_lp=Egxnd3Mtd2l6LXNlcnAiDnR3aXR0ZXIgdHdkb3ZhMgQQIxgnSNwGULAFWLAFcAF4AJABAJgBUqABUqoBATG4AQPIAQD4AQHCAggQABiiBBiwA-IDBBgBIEGIBgGQBgI&sclient=gws-wiz-serp`;
    window.open(googleTwUrl, '_blank');
}
const btn_busqueda_google_Tw = document.getElementById('btn_busqueda_google_Tw');
btn_busqueda_google_Tw.addEventListener('click', abrirBuscadorGoogle);

//Bing busqueda
function abrirBuscadorBingTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twBing').value;
    const bingUrlTw = `https://www.bing.com/search?q=twitter.com/${usuarioTw}`;
    window.open(bingUrlTw, '_blank');
}
const btn_busqueda_bing_Tw = document.getElementById('btn_busqueda_bing_Tw');
btn_busqueda_bing_Tw.addEventListener('click', abrirBuscadorBingTw);

//twMombreReal
function abrirBuscadorNombreCompletoTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twMombreReal').value;
    const nombreCompletoTwUrl = `https://twitter.com/search?q=${usuarioTw}&f=user`;
    window.open(nombreCompletoTwUrl, '_blank');
}
const btn_busqueda_nombreCompleto_Tw = document.getElementById('btn_busqueda_nombreCompleto_Tw');
btn_busqueda_nombreCompleto_Tw.addEventListener('click', abrirBuscadorNombreCompletoTw);


//Twitonomy
function abrirTwitonomyTw(event){
    event.preventDefault();
    const usuarioTw = document.getElementById('twTwitonomy').value;
    const twitonomyUrl = `https://www.twitonomy.com/profile.php?sn=${usuarioTw}`;
    window.open(twitonomyUrl, '_blank');
}
const btn_busqueda_twitonomy_Tw = document.getElementById('btn_busqueda_twitonomy_Tw');
btn_busqueda_twitonomy_Tw.addEventListener('click', abrirTwitonomyTw);


