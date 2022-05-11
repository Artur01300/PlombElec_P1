
const form = document.getElementById('form');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');
const selectOpts = document.getElementById('selectOpts');

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
    //Moitié sud de la France
    if(selectOpts.value === "Moitié sud de la France" && selectegeographie == "option1"){
        result = metrCube;
    }
    else if(selectOpts.value === "Moitié sud de la France" && selectegeographie == "option2"){
        result = metrCube + (metrCube * 0.20);
    }
    else if(selectOpts.value === "Moitié sud de la France" && selectegeographie == "option3"){
        result = metrCube + (metrCube * 0.20);
    }


    //Centre de la France
    if(selectOpts.value === "Centre de la France" && selectegeographie == "option1"){
        result = metrCube + (metrCube * 0.25);
    }
    else if(selectOpts.value === "Centre de la France" && selectegeographie == "option2"){
        result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
    }
    else if(selectOpts.value === "Centre de la France" && selectegeographie == "option3"){
        result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
    }

    //Nord de la France
    if(selectOpts.value === "Nord de la France" && selectegeographie == "option1"){
        result = metrCube + (metrCube * 0.25);
    }
    else if(selectOpts.value === "Nord de la France" && selectegeographie == "option2"){
        result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
    }
    else if(selectOpts.value === "Nord de la France" && selectegeographie == "option3"){
        result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
    }

    const divResult = document.getElementById('result');
    let newP = document.createElement('p');
    divResult.appendChild(newP);
    let resultRound = Math.round(result);
    newP.innerHTML = `Il vous faut une pompe à chaleur pouvant chauffer une piscine ayant un volume de <strong> ${resultRound}</strong> m³.`
});