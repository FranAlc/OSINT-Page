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