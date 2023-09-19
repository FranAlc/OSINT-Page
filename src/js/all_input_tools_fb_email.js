//Autocompletar inputs facebook
function autocompletarFb(event){
    event.preventDefault();
    const inputAutoCompletarFb = document.getElementById('autocompletarFb').value;

    document.getElementById('fbPerfil').value = inputAutoCompletarFb;
    document.getElementById('fbEducacion').value = inputAutoCompletarFb;
    document.getElementById('fbDatosContacto').value = inputAutoCompletarFb;
    document.getElementById('fbFamilia').value = inputAutoCompletarFb;
    document.getElementById('fbAmigos').value = inputAutoCompletarFb;
    document.getElementById('fbBiografia').value = inputAutoCompletarFb;
    document.getElementById('fbFotos').value = inputAutoCompletarFb;
    document.getElementById('fbAlbumFotos').value = inputAutoCompletarFb;
    document.getElementById('fbSeguidos').value = inputAutoCompletarFb;
    document.getElementById('fbSeguidores').value = inputAutoCompletarFb;
    document.getElementById('fbVideos').value = inputAutoCompletarFb;
}
const btn_autocompletar_fb = document.getElementById('btn_autocompletar_fb');
btn_autocompletar_fb.addEventListener('click', autocompletarFb);

//Autocompletar inputs email
function autocompletarEmail(event){
    event.preventDefault();

    const inputAutoCompletarEmail = document.getElementById('autocompletarEmail').value;
    //busqueda
    document.getElementById('emailGoogle').value = inputAutoCompletarEmail;
    document.getElementById('emailBing').value = inputAutoCompletarEmail;
    document.getElementById('emailGravatar').value = inputAutoCompletarEmail;
    document.getElementById('emailEmailrep').value = inputAutoCompletarEmail;
    document.getElementById('emailYandex').value = inputAutoCompletarEmail;
    //verificacion
    document.getElementById('emailHunterVerify').value = inputAutoCompletarEmail;
    document.getElementById('emailSpyTox').value = inputAutoCompletarEmail;
    document.getElementById('emailDomainData').value = inputAutoCompletarEmail;

}
const btn_autocompletar_email = document.getElementById('btn_autocompletar_email');
btn_autocompletar_email.addEventListener('click', autocompletarEmail);
