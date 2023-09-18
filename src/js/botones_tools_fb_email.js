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
    const usuarioFbFamilia = document.getElementById('fbFamilia')
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbFamilia}/about_family_and_relationships`;
    window.open(usuarioFbUrl, '_blank')
}
const btn_busqueda_familia = document.getElementById('btn_busqueda_familia');
btn_busqueda_familia.addEventListener('click', buscarFamiliaFb);

function buscarAmigosFb(){
    const usuarioFbUrl = ` https://www.facebook.com/${usuarioFbContactos}/friends`;
}

function buscarBiografiaFb(){

}

function buscarFotosFb(){

}

function buscarAlbumFotosFb(){

}





//Email btns