
const form = document.getElementById('form');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const radioButtons = document.querySelectorAll('input[name="geographie"]');
    let metrCube = longueur.value * largeur.value * hauteur.value;
    let selectegeographie;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            selectegeographie = radioButton.value;
            break;
        }
    }
    if(selectegeographie == "option1"){
        console.log(metrCube + (metrCube * 0.20))

    }

    else if(selectegeographie == "option2"){
        console.log(metrCube + (metrCube * 0.25));
    }

})

