//botones autocompletar Reddit
function autocompletarReddit(event){
    event.preventDefault();

    const inputAutocompletar = document.getElementById('autocompletarReddit').value;
    const inputAutocompletarReddit = inputAutocompletar;

    document.getElementById('rdNombreUsuario').value = inputAutocompletarReddit;
    document.getElementById('rdGoogle').value = inputAutocompletarReddit;
    
}
const btn_autocompletar_reddit = document.getElementById('btn_autocompletar_reddit');
btn_autocompletar_reddit.addEventListener('click', autocompletarReddit);

//botones autocompletar Tiktok

function autocompletarTiktok(event){
    event.preventDefault();

    const inputAutocompletar = document.getElementById('autocompletarTiktok').value;
    const inputAutocompletarTiktok = inputAutocompletar;

    document.getElementById('tktkNombreUsuario').value = inputAutocompletarTiktok;
    document.getElementById('tktkNombreUsuarioPerfiles').value = inputAutocompletarTiktok;
    document.getElementById('tktkSeguidores').value = inputAutocompletarTiktok;
    document.getElementById('tktkSeguidos').value = inputAutocompletarTiktok;
    document.getElementById('tktkLikes').value = inputAutocompletarTiktok;
    document.getElementById('tktkGoogle').value = inputAutocompletarTiktok;
    
}
const btn_autocompletar_Tiktok = document.getElementById('btn_autocompletar_Tiktok');
btn_autocompletar_Tiktok.addEventListener('click', autocompletarTiktok);

