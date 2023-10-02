//botones de busqueda en navegadores
function abrirSearchGoogle(event){
    event.preventDefault();
    const usuario = document.getElementById('searchGoogle').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_google = document.getElementById('btn_buscador_google');
btn_buscador_google.addEventListener('click',abrirSearchGoogle);

function abrirSearchBing(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBing').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_bing = document.getElementById('btn_buscador_bing');
btn_buscador_bing.addEventListener('click',abrirSearchBing);

function abrirSearchYandex(event){
    event.preventDefault();
    const usuario = document.getElementById('searchYandex').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_yandex = document.getElementById('btn_buscador_yandex');
btn_buscador_yandex.addEventListener('click',abrirSearchBing);


function abrirSearchBaidu(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBaidu').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_baidu = document.getElementById('btn_buscador_baidu');
btn_buscador_baidu.addEventListener('click', abrirSearchBaidu);


function abrirSearchBrave(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBrave').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_brave = document.getElementById('btn_buscador_brave');
btn_buscador_brave.addEventListener('click', abrirSearchBrave);

function abrirSearchDuckDuckGo(event){
    event.preventDefault();
    const usuario = document.getElementById('searchDuckDuckGo').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_duckduckgo = document.getElementById('btn_buscador_duckduckgo');
btn_buscador_duckduckgo.addEventListener('click', abrirSearchDuckDuckGo);

function abrirSearchQwant(event){
    event.preventDefault();
    const usuario = document.getElementById('searchQwant').value;
    const url = `${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_qwant = document.getElementById('btn_buscador_qwant');
btn_buscador_qwant.addEventListener('click', abrirSearchQwant);

//botones de busqueda por img