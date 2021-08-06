
const buttonCurriculo = document.getElementById("buttonCurriculo");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();

    const sectCurriculo = document.getElementById('sectCurriculo');
    const sectionsRight = document.getElementById('complementos');
    const buttonCurriculo = document.getElementById('buttonCurriculo');
    const asideLeft = document.getElementById('asideLeft');
    const teste1 = document.getElementById('teste1');
    const teste2 = document.getElementById('teste2');

    sectCurriculo.classList.toggle('curriculoOffViewer');
    sectionsRight.classList.toggle('sectionsRight');
    buttonCurriculo.classList.toggle('btn-curriculo-active');
    asideLeft.classList.toggle('asideCurriculo')
    teste2.classList.toggle('sectionRight')
    teste1.classList.toggle('sectionRight')
}

buttonCurriculo.addEventListener('click', toggleMenu);
buttonCurriculo.addEventListener('touchstart', toggleMenu);


