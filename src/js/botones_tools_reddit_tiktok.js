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