//Buscar username en reddit
function buscarUsernameReddit(event){
    event.preventDefault();
    const inputName = document.getElementById('rdNombreUsuario').value;
    const url = `https://www.reddit.com/r/${inputName}/`;
    window.open(url, '_blank');
}
const btn_buscar_perfil_reddit = document.getElementById('btn_buscar_perfil_reddit');
btn_buscar_perfil_reddit.addEventListener('click', buscarUsernameReddit);

//Persona + publicación - Reddit
function buscarPersonaMasPublicacion(event){
    event.preventDefault();
    const inputName = document.getElementById('rdNombreUsuario2').value; //usuario
    const inputPublicacion = document.getElementById('rdPublicacion').value; //publicacion del usuario ingresado
    const url = `https://www.reddit.com/r/${inputName}/search/?q=${inputPublicacion}`;
    window.open(url, '_blank');
}
const btn_buscar_personaEspecifica_reddit = document.getElementById('btn_buscar_personaEspecifica_reddit');
btn_buscar_personaEspecifica_reddit.addEventListener('click', buscarPersonaMasPublicacion);


//Buscar en Google - Reddit
function buscarGoogleReddit(event){
    event.preventDefault();
    const inputName = document.getElementById('rdGoogle').value;
    const url = `https://www.google.com/search?q=site%3Areddit.com+%27${inputName}%27`;
    window.open(url, '_blank');
}
const btn_buscar_google_reddit = document.getElementById('btn_buscar_google_reddit');
btn_buscar_google_reddit.addEventListener('click', buscarGoogleReddit);

//Busqueda Global
function buscadorGlobalReddit(event){
    event.preventDefault();
    const inputName = document.getElementById('rdGoogle').value;
    const url = `https://www.bing.com/search?q=site%3A+reddit.com+%27${inputName}%27`; //bing
    const url2 = `https://yandex.com/search/?text=site%3A+reddit.com+%27${inputName}%27`; //yandex
    window.open(url, '_blank');
    window.open(url2, '_blank');
    
}
const btn_buscador_global_reddit = document.getElementById('btn_buscador_global_reddit');
btn_buscador_global_reddit.addEventListener('click', buscadorGlobalReddit);

//////////////Tiktok///////////////
//Buscar perfil exacto
function busquedaPerfilTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkNombreUsuario');
    const url = `${tktkNombreUsuario}`;
    window.open(url, '_blank');
}
const btn_buscar_perfil_tiktok = document.getElementById('btn_buscar_perfil_tiktok');
btn_buscar_perfil_tiktok.addEventListener('click', busquedaPerfilTiktok);


//Busqueda de perfiles relacionados
function busquedaPerfilesRelacionadosTiktok(event){
    event.preventDefault();
    const tktkNombreUsuarioPerfiles = document.getElementById('tktkNombreUsuarioPerfiles');
    const url = `${tktkNombreUsuarioPerfiles}`;
    window.open(url, '_blank');
}
const btn_buscar_perfiles_tiktok = document.getElementById('btn_buscar_perfiles_tiktok');
btn_buscar_perfiles_tiktok.addEventListener('click', busquedaPerfilesRelacionadosTiktok);

//Seguidores
function busquedaSeguidoresTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkSeguidores');
    const url = `${tktkNombreUsuario}`;
    window.open(url, '_blank');
}
const btn_buscar_seguidores_tiktok = document.getElementById('btn_buscar_seguidores_tiktok');
btn_buscar_seguidores_tiktok.addEventListener('click', busquedaSeguidoresTiktok);

//Seguidos
function busquedaSeguidosTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkSeguidos');
    const url = `${tktkNombreUsuario}`;
    window.open(url, '_blank');
}
const btn_buscar_seguidos_tiktok = document.getElementById('btn_buscar_seguidos_tiktok');
btn_buscar_seguidos_tiktok.addEventListener('click', busquedaSeguidosTiktok);

//Likes
function busquedaLikesTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkLikes');
    const url = `${tktkNombreUsuario}`;
    window.open(url, '_blank');
}
const btn_buscar_likes_tiktok = document.getElementById('btn_buscar_likes_tiktok');
btn_buscar_likes_tiktok.addEventListener('click', busquedaLikesTiktok);

//Google
function busquedaGoogleTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkGoogle');
    const url = `https://www.google.com/search?q=site%3Atiktok.com+%27${tktkNombreUsuario}%27`;
    window.open(url, '_blank');
}
const btn_buscar_google_tiktok = document.getElementById('btn_buscar_google_tiktok');
btn_buscar_google_tiktok.addEventListener('click', busquedaGoogleTiktok);


//Busqueda global