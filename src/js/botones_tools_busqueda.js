//botones de busqueda en navegadores
function abrirSearchGoogle(event){
    event.preventDefault();
    const usuario = document.getElementById('searchGoogle').value;
    const url = `https://google.com/search?q=${usuario}&tbs=cdr:1,cd_min:1/1/0,sbd:1`;
    window.open(url, '_blank');

}
const btn_buscador_google = document.getElementById('btn_buscador_google');
btn_buscador_google.addEventListener('click',abrirSearchGoogle);

function abrirSearchBing(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBing').value;
    const url = `https://bing.com/news/search?q="${usuario}"`;
    window.open(url, '_blank');

}
const btn_buscador_bing = document.getElementById('btn_buscador_bing');
btn_buscador_bing.addEventListener('click',abrirSearchBing);

function abrirSearchYandex(event){
    event.preventDefault();
    const usuario = document.getElementById('searchYandex').value;
    const url = `https://www.yandex.com/yandsearch?text='${usuario}'`;
    window.open(url, '_blank');

}
const btn_buscador_yandex = document.getElementById('btn_buscador_yandex');
btn_buscador_yandex.addEventListener('click',abrirSearchBing);


function abrirSearchBaidu(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBaidu').value;
    const url = `https://baidu.com/s?wd=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_baidu = document.getElementById('btn_buscador_baidu');
btn_buscador_baidu.addEventListener('click', abrirSearchBaidu);


function abrirSearchBrave(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBrave').value;
    const url = `https://search.brave.com/search?q=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_brave = document.getElementById('btn_buscador_brave');
btn_buscador_brave.addEventListener('click', abrirSearchBrave);

function abrirSearchDuckDuckGo(event){
    event.preventDefault();
    const usuario = document.getElementById('searchDuckDuckGo').value;
    const url = `https://duckduckgo.com/?q=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_duckduckgo = document.getElementById('btn_buscador_duckduckgo');
btn_buscador_duckduckgo.addEventListener('click', abrirSearchDuckDuckGo);

function abrirSearchQwant(event){
    event.preventDefault();
    const usuario = document.getElementById('searchQwant').value;
    const url = `https://www.qwant.com/?q=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_qwant = document.getElementById('btn_buscador_qwant');
btn_buscador_qwant.addEventListener('click', abrirSearchQwant);

//botones de busqueda por img

function abrirSearchGoogleFotos(event){
    event.preventDefault();
    const usuario = document.getElementById('searchGoogleFotos').value;
    const url = `https://www.google.com/searchbyimage?image_url=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_googleFotos = document.getElementById('btn_buscador_googleFotos');
btn_buscador_googleFotos.addEventListener('click', abrirSearchGoogleFotos);


function abrirSearchGoogleLens(event){
    event.preventDefault();
    const usuario = document.getElementById('searchGoogleLens').value;
    const url = `https://lens.google.com/uploadbyurl?url=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_googleLens = document.getElementById('btn_buscador_googleLens');
btn_buscador_googleLens.addEventListener('click', abrirSearchGoogleLens);


function abrirSearchBingUrl(event){
    event.preventDefault();
    const usuario = document.getElementById('searchBingUrl').value;
    const url = `https://www.bing.com/images/search?view=detailv2&iss=sbi&q=imgurl:${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_bingUrl = document.getElementById('btn_buscador_bingUrl');
btn_buscador_bingUrl.addEventListener('click', abrirSearchBingUrl);

function abrirSearchYandexFotos(event){
    event.preventDefault();
    const usuario = document.getElementById('searchYandexFotos').value;
    const url = `https://yandex.com/images/search?rpt=imageview&url=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_yandexFotos = document.getElementById('btn_buscador_yandexFotos');
btn_buscador_yandexFotos.addEventListener('click', abrirSearchYandexFotos);

function abrirSearchInstagramFotos(event){
    event.preventDefault();
    const usuario = document.getElementById('searchInstagramFotos').value;
    const url = `https://www.google.com/search?tbm=isch&q=site%3Ainstagram.com+${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_InstagramFotos = document.getElementById('btn_buscador_InstagramFotos');
btn_buscador_InstagramFotos.addEventListener('click', abrirSearchInstagramFotos);


function abrirSearchTumblrFotos(event){
    event.preventDefault();
    const usuario = document.getElementById('searchTumblrFotos').value;
    const url = `https://www.tumblr.com/search/${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_tumblrFotos = document.getElementById('btn_buscador_tumblrFotos');
btn_buscador_tumblrFotos.addEventListener('click', abrirSearchTumblrFotos);

function abrirSearchTwitterFotos(event){
    event.preventDefault();
    const usuario = document.getElementById('searchTwitterFotos').value;
    const url = `https://twitter.com/search?f=image&q=${usuario}`;
    window.open(url, '_blank');

}
const btn_buscador_twitterFotos = document.getElementById('btn_buscador_twitterFotos');
btn_buscador_twitterFotos.addEventListener('click',  abrirSearchTwitterFotos);