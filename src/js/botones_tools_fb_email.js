//Facebook btns
//Buscar el perfil de fb
function buscarPerfilFb(event){
    event.preventDefault();
    const usuarioFb = document.getElementById('fbPerfil').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFb}`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb = document.getElementById('btn_perfil_fb');
btn_perfil_fb.addEventListener('click', buscarPerfilFb);

//buscar educacion x fb
function buscarEducacionFb(event){
    event.preventDefault();
    const usuarioFbEducacion = document.getElementById('fbEducacion').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbEducacion}/about_work_and_education`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_educacion = document.getElementById('btn_busqueda_educacion');
btn_busqueda_educacion.addEventListener('click',buscarEducacionFb);

//datos contacto
function buscarDatosContactoFb(event){
    event.preventDefault();
    const usuarioFbDatosContacto = document.getElementById('fbDatosContacto').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbDatosContacto}/about_contact_and_basic_info`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_dato_de_contacto = document.getElementById('btn_busqueda_dato_de_contacto');
btn_busqueda_dato_de_contacto.addEventListener('click', buscarDatosContactoFb);

//buscar familia - relaciones
function buscarFamiliaFb(event){
    event.preventDefault();
    const usuarioFbFamilia = document.getElementById('fbFamilia').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbFamilia}/about_family_and_relationships`;
    window.open(usuarioFbUrl, '_blank')
}
const btn_busqueda_familia = document.getElementById('btn_busqueda_familia');
btn_busqueda_familia.addEventListener('click', buscarFamiliaFb);

//buscar amigos
function buscarAmigosFb(event){
    event.preventDefault();
    const usuarioFbContactos = document.getElementById('fbContactos').value;
    const usuarioFbUrl = ` https://www.facebook.com/${usuarioFbContactos}/friends`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_amigosfb = document.getElementById('btn_busqueda_amigosfb');
btn_busqueda_amigosfb.addEventListener('click', buscarAmigosFb);

//biografia
function buscarBiografiaFb(event){
    event.preventDefault();
    const usuarioFbBiografia = document.getElementById('fbBiografia').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBiografia}`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_biografia = document.getElementById('btn_busqueda_biografia');
btn_busqueda_biografia.addEventListener('click', buscarBiografiaFb);

//fotos
function buscarFotosFb(event){
    event.preventDefault();
    const usuarioFbBuscarFotos = document.getElementById('fbFotos').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarFotos}`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_fotos = document.getElementById('btn_busqueda_fotos');
btn_busqueda_fotos.addEventListener('click', buscarFotosFb);

//album fotos
function buscarAlbumFotosFb(event){
    event.preventDefault();
    const usuarioFbBuscarAlbFotos = document.getElementById('fbAlbumFotos').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarAlbFotos}`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_album_fotos = document.getElementById('btn_busqueda_album_fotos');
btn_busqueda_album_fotos.addEventListener('click', buscarAlbumFotosFb);

//redes
//google
function buscarUsuarioGoogleFb(event){
    event.preventDefault();
    const usuarioFbGoogle = document.getElementById('fbPerfilGoogle').value;
    const usuarioFbUrl = `${usuarioFbGoogle}`; //
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_google = document.getElementById('btn_perfil_fb_google');
btn_perfil_fb_google.addEventListener('click', buscarUsuarioGoogleFb);

//bing
function buscarUsuarioBingFb(event){
    event.preventDefault();
    const usuarioFbBing = document.getElementById('fbPerfilBing').value;
    const usuarioFbUrl = `${usuarioFbBing}`; //
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_bing = document.getElementById('btn_perfil_fb_bing');
btn_perfil_fb_bing.addEventListener('click', buscarUsuarioBingFb);

//yahoo 
function buscarUsuarioYahooFb(event){
    event.preventDefault();
    const usuarioFbYahoo = document.getElementById('fbPerfilYahoo').value;
    const usuarioFbUrl = `${usuarioFbYahoo}`; //
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_yahoo = document.getElementById('btn_perfil_fb_yahoo');
btn_perfil_fb_yahoo.addEventListener('click', buscarUsuarioYahooFb);


//////Email btns