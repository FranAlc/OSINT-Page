//Buscar en google
function abrirBuscadorGoogle(event){
    event.preventDefault();
    const usuario = document.getElementById('lkNombreGoogle').value;
    const url = `https://www.google.com/search?q=site%3Alinkedin.com+%27${usuario}%27`;
    window.open(url, '_blank');
    
}
const btn_buscar_user_google = document.getElementById('btn_buscar_user_google');
btn_buscar_user_google.addEventListener('click',abrirBuscadorGoogle);

//Buscador bing

function abrirBuscadorBing(event){
    event.preventDefault();
    const usuario = document.getElementById('lkNombreBing').value;
    const url = `https://www.bing.com/search?q=site%3Alinkedin.com+%22${usuario}%22`;
    window.open(url, '_blank');
    
}
const btn_buscar_user_bing = document.getElementById('btn_buscar_user_bing');
btn_buscar_user_bing.addEventListener('click',abrirBuscadorBing);


//Nombre empresa

function abrirBuscadorNombreEmpresa(event){
    event.preventDefault();
    const usuario = document.getElementById('lkNombreEmpresa').value;
    const url = `https://www.linkedin.com/search/results/companies/?keywords=${usuario}`;
    window.open(url, '_blank');
}
const btn_buscar_nombre_empresa = document.getElementById('btn_buscar_nombre_empresa');
btn_buscar_nombre_empresa.addEventListener('click',abrirBuscadorNombreEmpresa);

//Nombre institucion

function abrirBuscadorNombreEducacion(event){
    event.preventDefault();
    const usuario = document.getElementById('lkNombreEducacion').value;
    const url = `https://www.linkedin.com/search/results/schools/?keywords=${usuario}`;
    window.open(url, '_blank');
}
const btn_buscar_nombre_instituto = document.getElementById('btn_buscar_nombre_instituto');
btn_buscar_nombre_instituto.addEventListener('click',abrirBuscadorNombreEducacion);

//Nombre evento

function abrirBuscadorNombreEvento(event){
    event.preventDefault();
    const usuario = document.getElementById('lkNombreEvento').value;
    const url = `https://www.linkedin.com/search/results/events/?keywords=${usuario}`;
    window.open(url, '_blank');
}
const btn_buscar_nombre_evento = document.getElementById('btn_buscar_nombre_evento');
btn_buscar_nombre_evento.addEventListener('click',abrirBuscadorNombreEvento);

//Nombre persona

function abrirBuscadorNombrePersona(event){
    event.preventDefault();
    const usuario = document.getElementById('lkPerfil').value;
    const url = `https://www.linkedin.com/in/${usuario}/`;
    window.open(url, '_blank');
}
const btn_buscar_nombre_persona = document.getElementById('btn_buscar_nombre_persona');
btn_buscar_nombre_persona.addEventListener('click',abrirBuscadorNombrePersona);

//Buscar imgs 
function abrirBuscadorNombreFoto(event){
    event.preventDefault();
    const usuario = document.getElementById('lkFotosGoogle').value;
    const url = `https://www.google.com/search?q=site:linkedin.com+%27${usuario}%27&sca_esv=570220637&tbm=isch&sxsrf=AM9HkKm7dUqMJp_hzJ25o0DAd67SFs5lYg:1696301397068&source=lnms&sa=X&ved=2ahUKEwiP49CR79iBAxVhq5UCHSm4DY8Q_AUoAXoECAEQAw${usuario}/`;
    window.open(url, '_blank');
}
const btn_buscar_foto_googlelk = document.getElementById('btn_buscar_foto_googlelk');
btn_buscar_foto_googlelk.addEventListener('click',abrirBuscadorNombreFoto);