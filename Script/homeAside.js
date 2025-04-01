const buttonCurriculo = document.getElementById("buttonCurriculo");


const buttonCurriculoMobile = document.getElementById("buttonCurriculoMobile");

function trasicaoParaCurriculo(event){
    if(event.type === 'touchstart') event.preventDefault();

    const sectCurriculo = document.getElementById('sectCurriculo');
    const sectionsRight = document.getElementById('complementos');
    const buttonCurriculo = document.getElementById('buttonCurriculo');
    const asideLeft = document.getElementById('asideLeft');
    const sectionTop = document.getElementById('sectionTop');
    const sectionMid = document.getElementById('sectionMid');

    sectCurriculo.classList.toggle('curriculoOffViewer');
    sectionsRight.classList.toggle('sectionsRight');
    buttonCurriculo.classList.toggle('btn-curriculo-active');
    asideLeft.classList.toggle('asideCurriculo')

   /*  essas são as barras que formam o desing da aside left quando fechada, seram removidas em breve */
    sectionMid.classList.toggle('sectionRight')
    sectionTop.classList.toggle('sectionRight')
}

buttonCurriculo.addEventListener('click', trasicaoParaCurriculo);
buttonCurriculo.addEventListener('touchstart', trasicaoParaCurriculo);

buttonCurriculoMobile.addEventListener('click', trasicaoParaCurriculo);
buttonCurriculoMobile.addEventListener('touchstart', trasicaoParaCurriculo);



