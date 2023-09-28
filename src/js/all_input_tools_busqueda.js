function autocompletarForms(event){
    event.preventDefault();
    const autocompletartxt = document.getElementById('autocompletarBusquedas').value;

    document.getElementById('searchGoogle').value = autocompletartxt;
    document.getElementById('searchBing').value = autocompletartxt;
    document.getElementById('searchYandex').value = autocompletartxt;
    document.getElementById('searchBaidu').value = autocompletartxt;
    document.getElementById('searchBrave').value = autocompletartxt;
    document.getElementById('searchDuckDuckGo').value = autocompletartxt;
    document.getElementById('searchQwant').value = autocompletartxt;
}

const btn_autocompletar_busqueda = document.getElementById('btn_autocompletar_busqueda');
btn_autocompletar_busqueda.addEventListener('click', autocompletarForms);
