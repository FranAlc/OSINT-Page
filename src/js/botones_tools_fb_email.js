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
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbEducacion}`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_educacion = document.getElementById('btn_busqueda_educacion');
btn_busqueda_educacion.addEventListener('click',buscarEducacionFb);

//datos contacto
function buscarDatosContactoFb(event){
    const usuarioFbDatosContacto = document.getElementById('fbDatosContacto').value;
    const usuarioFbUrl = `${usuarioFbDatosContacto}`;
    window.open(usuarioFb, '_blank');

}
const btn_busqueda_dato_de_contacto = document.getElementById('fbDatosContacto');
btn_busqueda_dato_de_contacto.addEventListener('click', buscarDatosContactoFb)

function buscarFamiliaFb(){

}

function buscarAmigosFb(){

}

function buscarBiografiaFb(){

}

function buscarFotosFb(){

}

function buscarAlbumFotosFb(){

}





//Email btns