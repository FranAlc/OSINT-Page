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
    const inputName = document.getElementById('rdBuscadorGlobal').value;
    const url = `https://www.bing.com/search?q=site%3A+reddit.com+%27${inputName}%27`; //bing
    const url2 = `https://yandex.com/search/?text=site%3A+reddit.com+%27${inputName}%27`; //yandex
    window.open(url, '_blank');
    window.open(url2, '_blank');
    
}
const btn_buscador_global_reddit = document.getElementById('btn_buscador_global_reddit');
btn_buscador_global_reddit.addEventListener('click', buscadorGlobalReddit);


//Brave Reddit
function buscadorBraveReddit(event){
    event.preventDefault();
    const inputName = document.getElementById('rdsearchBrave').value;
    const url = `https://search.brave.com/search?q=site%3Areddit.com+%27${inputName}%27&source=web`; //brave
    window.open(url, '_blank');
    
}
const btn_buscador_brave_reddit = document.getElementById('btn_buscador_brave_reddit');
btn_buscador_brave_reddit.addEventListener('click', buscadorBraveReddit);


//////////////Tiktok///////////////
//Buscar perfil exacto
function busquedaPerfilTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkNombreUsuario').value;
    const url = `https://www.tiktok.com/@${tktkNombreUsuario}`;
    window.open(url, '_blank');
}
const btn_buscar_perfil_tiktok = document.getElementById('btn_buscar_perfil_tiktok');
btn_buscar_perfil_tiktok.addEventListener('click', busquedaPerfilTiktok);


//Busqueda de perfiles relacionados
function busquedaPerfilesRelacionadosTiktok(event){
    event.preventDefault();
    const tktkNombreUsuarioPerfiles = document.getElementById('tktkNombreUsuarioPerfiles').value;
    const url = `https://www.tiktok.com/search?q=${tktkNombreUsuarioPerfiles}`;
    window.open(url, '_blank');
}
const btn_buscar_perfiles_tiktok = document.getElementById('btn_buscar_perfiles_tiktok');
btn_buscar_perfiles_tiktok.addEventListener('click', busquedaPerfilesRelacionadosTiktok);


//Google
function busquedaGoogleTiktok(event){
    event.preventDefault();
    const tktkNombreUsuario = document.getElementById('tktkGoogle').value;
    const url = `https://www.google.com/search?q=site%3Atiktok.com+%27${tktkNombreUsuario}%27`;
    window.open(url, '_blank');
}
const btn_buscar_google_tiktok = document.getElementById('btn_buscar_google_tiktok');
btn_buscar_google_tiktok.addEventListener('click', busquedaGoogleTiktok);


//Busqueda global
function buscadorGlobalTiktok(event){
    event.preventDefault();
    const inputName = document.getElementById('tktkBuscadorGlobal').value;
    const url = `https://www.bing.com/search?q=site%3A+tiktok.com+%27${inputName}%27`; //bing
    const url2 = `https://yandex.com/search/?text=site%3A+tiktok.com+%27${inputName}%27`; //yandex
    window.open(url, '_blank');
    window.open(url2, '_blank');
    
}
const btn_buscador_global_tiktok = document.getElementById('btn_buscador_global_tiktok');
btn_buscador_global_tiktok.addEventListener('click', buscadorGlobalTiktok);


//Brave Tiktok
function buscadorBraveTiktok(event){
    event.preventDefault();
    const inputName = document.getElementById('tktksearchBrave').value;
    const url = `https://search.brave.com/search?q=site%3Atiktok.com+%27${inputName}%27&source=web`; //brave
    window.open(url, '_blank');
    
}
const btn_buscador_brave_tiktok = document.getElementById('btn_buscador_brave_tiktok');
btn_buscador_brave_tiktok.addEventListener('click', buscadorBraveTiktok);