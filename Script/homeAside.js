
const buttonCurriculoMobile = document.getElementById("buttonCurriculoMobile");

function trasicaoParaCurriculo(event){
    if(event.type === 'touchstart') event.preventDefault();

    const sectCurriculo = document.getElementById('sectCurriculo');
    const asideLeft = document.getElementById('asideLeft');


    sectCurriculo.classList.toggle('curriculoOffViewer');
    asideLeft.classList.toggle('asideCurriculo')

}



buttonCurriculoMobile.addEventListener('click', trasicaoParaCurriculo);
buttonCurriculoMobile.addEventListener('touchstart', trasicaoParaCurriculo);



