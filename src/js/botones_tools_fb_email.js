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
    const usuarioFbContactos = document.getElementById('fbAmigos').value;
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
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarFotos}/photos`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_fotos = document.getElementById('btn_busqueda_fotos');
btn_busqueda_fotos.addEventListener('click', buscarFotosFb);

//album fotos
function buscarAlbumFotosFb(event){
    event.preventDefault();
    const usuarioFbBuscarAlbFotos = document.getElementById('fbAlbumFotos').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarAlbFotos}/photos_albums`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_album_fotos = document.getElementById('btn_busqueda_album_fotos');
btn_busqueda_album_fotos.addEventListener('click', buscarAlbumFotosFb);

//videos fb 

function buscarVideosFb(event){
    event.preventDefault();
    const usuarioFbBuscarVideos = document.getElementById('fbVideos').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarVideos}/videos`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_videosfb = document.getElementById('btn_busqueda_videosfb');
btn_busqueda_videosfb.addEventListener('click', buscarVideosFb);

//seguidos
function buscarSeguidosFb(event){
    event.preventDefault();
    const usuarioFbBuscarSeguidos = document.getElementById('fbSeguidos').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarSeguidos}/following`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_seguidosfb = document.getElementById('btn_busqueda_seguidosfb');
btn_busqueda_seguidosfb.addEventListener('click', buscarSeguidosFb);

//seguidores
function buscarSeguidoresFb(event){
    event.preventDefault();
    const usuarioFbBuscarSeguidores = document.getElementById('fbSeguidores').value;
    const usuarioFbUrl = `https://www.facebook.com/${usuarioFbBuscarSeguidores}/followers`;
    window.open(usuarioFbUrl, '_blank');
}
const btn_busqueda_seguidoresfb = document.getElementById('btn_busqueda_seguidoresfb');
btn_busqueda_seguidoresfb.addEventListener('click', buscarSeguidoresFb);


//redes
//google
function buscarUsuarioGoogleFb(event){
    event.preventDefault();
    const usuarioFbGoogle = document.getElementById('fbPerfilGoogle').value;
    const usuarioFbUrl = `https://www.google.com/search?q=site%3Afacebook.com+${usuarioFbGoogle}`; 
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_google = document.getElementById('btn_perfil_fb_google');
btn_perfil_fb_google.addEventListener('click', buscarUsuarioGoogleFb);

//bing
function buscarUsuarioBingFb(event){
    event.preventDefault();
    const usuarioFbBing = document.getElementById('fbPerfilBing').value;
    const usuarioFbUrl = `https://www.bing.com/search?q=site%3Ainstagram.com+%22${usuarioFbBing}%22`; 
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_bing = document.getElementById('btn_perfil_fb_bing');
btn_perfil_fb_bing.addEventListener('click', buscarUsuarioBingFb);

//yahoo 
function buscarUsuarioYahooFb(event){
    event.preventDefault();
    const usuarioFbYahoo = document.getElementById('fbPerfilYahoo').value;
    const usuarioFbUrl = `https://ar.search.yahoo.com/search?p=site%3Afacebook.com+%27${usuarioFbYahoo}%27`; 
    window.open(usuarioFbUrl, '_blank');
}
const btn_perfil_fb_yahoo = document.getElementById('btn_perfil_fb_yahoo');
btn_perfil_fb_yahoo.addEventListener('click', buscarUsuarioYahooFb);


//////Email btns

//emailGoogle
function abrirBuscadorGoogle(event){
    event.preventDefault();
    const usuarioEmailGoogle = document.getElementById('emailGoogle').value;
    const emailUrl = `https://www.google.com/search?q=%22${usuarioEmailGoogle}%22`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_google = document.getElementById('btn_buscar_email_google');
btn_buscar_email_google.addEventListener('click', abrirBuscadorGoogle);




//emailBing 
function abrirEmailBing(event){
    event.preventDefault();
    const usuarioEmailBing = document.getElementById('emailBing').value;
    const emailUrl = `https://www.bing.com/search?q=%22${usuarioEmailBing}%22`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_bing = document.getElementById('btn_buscar_email_bing');
btn_buscar_email_bing.addEventListener('click', abrirEmailBing);

//emailGravatar 


function abrirEmailGravatar(event){
    event.preventDefault();
    const usuarioEmailGravatar = document.getElementById('emailGravatar').value;
    const emailUrl = `https://en.gravatar.com/site/check/${usuarioEmailGravatar}`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_gravatar = document.getElementById('btn_buscar_email_gravatar');
btn_buscar_email_gravatar.addEventListener('click', abrirEmailGravatar);

//Emailrep 

function abrirEmailrep(event){
    event.preventDefault();
    const usuarioEmailrep = document.getElementById('emailEmailrep').value;
    const emailUrl = `https://emailrep.io/query/${usuarioEmailrep}`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_emailrep = document.getElementById('btn_buscar_email_emailrep');
btn_buscar_email_emailrep.addEventListener('click', abrirEmailrep);

//Yandex
function abrirEmailYandex(event){
    event.preventDefault();
    const usuarioEmailYandex = document.getElementById('emailYandex').value;
    const emailUrl = `https://yandex.com/search/?text=%22${usuarioEmailYandex}%22`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_yandex = document.getElementById('btn_buscar_email_yandex');
btn_buscar_email_yandex.addEventListener('click',abrirEmailYandex);



//emailHunterVerify 

function abrirEmailHunterVerify(event){
    event.preventDefault();
    const usuarioEmailHunterVerify = document.getElementById('emailEmailHunterVerify').value;
    const emailUrl = `https://hunter.io/email-verifier/${usuarioEmailHunterVerify}`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_hunterVerify = document.getElementById('btn_buscar_email_hunterVerify');
btn_buscar_email_hunterVerify.addEventListener('click',abrirEmailHunterVerify);

//emailSpyTox

function abrirEmailSpyTox(event){
    event.preventDefault();
    const usuarioEmailSpyTox = document.getElementById('emailSpyTox').value; //no requiere
    const emailUrl = `https://www.spytox.com/`;
    window.open(emailUrl, '_blank');

}
const btn_buscar_email_spytox = document.getElementById('btn_buscar_email_spytox');
btn_buscar_email_spytox.addEventListener('click',abrirEmailSpyTox);

//emailDomainData 

function abrirEmailDomainData(event){
    event.preventDefault();
    const usuarioEmailDomainData = document.getElementById('emailDomainData').value;
    const emailUrl = `http://domainbigdata.com/email/${usuarioEmailDomainData}`;
    window.open(emailUrl, '_blank');
}
const btn_buscar_email_domaindata = document.getElementById('btn_buscar_email_domaindata');
btn_buscar_email_domaindata.addEventListener('click',abrirEmailDomainData);
