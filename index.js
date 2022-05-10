
const form = document.getElementById('form');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');


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
        result = metrCube;
    }

    else if(selectegeographie == "option2"){
        result = metrCube + (metrCube * 0.20);
    }

    else if(selectegeographie == "option3"){
        result = metrCube + (metrCube * 0.25);
    }
    else if(selectegeographie == "option4"){
        result = metrCube + (metrCube * 0.30);
    }


    const divResult = document.getElementById('result');
    let newP = document.createElement('p');
    divResult.appendChild(newP);
    let resultRound = Math.round(result);
    newP.innerHTML = `Il vous faut une pompe à chaleur pouvant chauffer une piscine ayant un volume de <strong> ${resultRound}</strong> m³.`
});

const cumule2Facteurs = document.getElementById('cumule2Facteurs');


cumule2Facteurs.addEventListener('click', (e)=>{
    e.preventDefault();
    radio1.innerHTML = "";
    radio2.innerHTML = 
    `
        <div>
            <input type="checkbox" name="geographie" id="semiEtHors" value="option5">
            <label for="semiEtHors">
                Piscine enterrée
            </label>
        </div>
        <div>
            <input type="checkbox" name="geographie" id="semiEtHors" value="option6">
            <label for="semiEtHors">
                Piscine semi-enterrée ou hors-sol
            </label>
        </div>
        <div>
            <input type="checkbox" name="geographie" id="semiEtHors" value="option7">
            <label for="semiEtHors">
                Moitié sud de la France
            </label>
        </div>
        <div>
            <input type="checkbox" name="geographie" id="semiEtHors" value="option8">
            <label for="semiEtHors">
                Centre, nord de la France, ou en altitude
            </label>
        </div>
    `
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        // Comptage des checkbox
        let formobj = document.forms[0];
        let counter = 0;
        for (let j = 0; j < formobj.elements.length; j++)
        {
            if (formobj.elements[j].type == "checkbox")
            {
                if (formobj.elements[j].checked)
                {
                    counter++;
                }
            }    
        }

        if(counter > 2){
            alert("Attention! vous devez sélectionner pas plus que 2 facteurs");
        }
        else{
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
            result = metrCube;
        }
    
        else if(selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20);
        }
    
        else if(selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.25);
        }
        else if(selectegeographie == "option4"){
            result = metrCube + (metrCube * 0.30);
        }
    
    
        const divResult = document.getElementById('result');
        let newP = document.createElement('p');
        divResult.appendChild(newP);
        let resultRound = Math.round(result);
        newP.innerHTML = `Il vous faut une pompe à chaleur pouvant chauffer une piscine ayant un volume de <strong> ${resultRound}</strong> m³.`
            
        }
    });

});