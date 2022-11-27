// Animacion
window.addEventListener('scroll', function(){
    let objeto = document.querySelector('#objeto')
    let alturaObjeto = objeto.getBoundingClientRect().top;
    let alturaPantalla = window.innerHeight/1.5;
    objeto.classList.add('transform_up');
    if(alturaObjeto <= alturaPantalla){
        objeto.classList.add('aparece');
    }else{
        objeto.classList.remove('aparece');
    }
})

// Mode Dark

let darkMode = document.querySelector('#btn-dark');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');

darkMode.addEventListener('click', function(){
    body.classList.toggle('dark');
    h1.classList.toggle('dark');
})