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
    const url = `${inputName}`; //bing
    const url2 = `${inputName}`; //yahoo
    window.open(url, '_blank');
}
const btn_buscador_global_reddit = document.getElementById('btn_buscador_global_reddit');
btn_buscador_global_reddit.addEventListener('click', buscadorGlobalReddit);