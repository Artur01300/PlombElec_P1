
const form = document.getElementById('form');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const radioButtons = document.querySelectorAll('input[name="geographie"]');
    let metrCube = longueur.value * largeur.value * hauteur.value;
    let selectegeographie;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            selectegeographie = radioButton.value;
            break;
        }
    }
    let result = 0;
    if(selectegeographie == "option1"){
        result = metrCube + (metrCube * 0.20)
    }

    else if(selectegeographie == "option2"){
        result = metrCube + (metrCube * 0.25);
    }

    const divResult = document.getElementById('result');
    let newP = document.createElement('p');
    divResult.appendChild(newP);
    newP.innerHTML = result
});

