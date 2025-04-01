function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }
    return age;
}

function textAboutMe() {
    const textAboutMe = `Oi6, eu sou o Carlos Vinícius, tenho ${calculateAge('2001-08-04')} anos e moro em Senador Canedo-GO. Sou formado em Engenharia de Software e gosto de trabalhar com tecnologia, especialmente desenvolvimento web. Curto aprender novas stacks, melhorar a performance dos meus projetos e criar soluções que realmente façam a diferença. Estou sempre buscando evoluir e me desafiar no que faço.`
    document.getElementById('textAboutMe').innerHTML = textAboutMe
}
textAboutMe()