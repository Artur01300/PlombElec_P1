
const selectOpts = document.getElementById('selectOpts');
const radioSections = document.querySelectorAll('input[name="radioSections"]');
const radioFils = document.querySelectorAll('input[name="fils"]');
const divResult = document.getElementById('result');


// form.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    
    //     let metrCube = longueur.value * largeur.value * hauteur.value;
    //     let selectegeographie;
    //     for(const radioButton of radioButtons){
//         if(radioButton.checked){
//             selectegeographie = radioButton.value;
//             break;
//         }
//     }
//     let result = 0;

//     else{
//         //Sud de la France
//         if(selectOpts.value === "Sud de la France" && selectegeographie == "option1"){
//             result = metrCube;
//         }
//         else if(selectOpts.value === "Sud de la France" && selectegeographie == "option2"){
//             result = metrCube + (metrCube * 0.20);
//         }
//         else if(selectOpts.value === "Sud de la France" && selectegeographie == "option3"){
//             result = metrCube + (metrCube * 0.20);
//         }


//         //Centre de la France
//         if(selectOpts.value === "Centre de la France" && selectegeographie == "option1"){
//             result = metrCube + (metrCube * 0.25);
//         }
//         else if(selectOpts.value === "Centre de la France" && selectegeographie == "option2"){
//             result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
//         }
//         else if(selectOpts.value === "Centre de la France" && selectegeographie == "option3"){
//             result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
//         }

//         //Nord de la France
//         if(selectOpts.value === "Nord de la France" && selectegeographie == "option1"){
//             result = metrCube + (metrCube * 0.25);
//         }
//         else if(selectOpts.value === "Nord de la France" && selectegeographie == "option2"){
//             result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
//         }
//         else if(selectOpts.value === "Nord de la France" && selectegeographie == "option3"){
//             result = metrCube + (metrCube * 0.20) + (metrCube * 0.25)
//         }
//     }

//     const divResult = document.getElementById('result');
  
//     let newP = document.createElement('p');
//     divResult.appendChild(newP);
//     let resultRound = Math.round(result);
//     newP.innerHTML = `
//     <strong>Resultat :</strong>  Il vous faut une pompe à chaleur pouvant chauffer une piscine ayant un volume de <strong> ${resultRound}</strong> m³.
//     <p>
//         <a href="https://www.plombelecdistribution.com/">Voir les produits</a>
//     </p>
//   `
// });

// Calculateur pour gaines électrique
const formGaines = document.getElementById('formGaines');


formGaines.addEventListener('submit', (e)=>{
    e.preventDefault();

    //radio fils
    let valuesRadioFils;
    for(const radioFil of radioFils){

        if(radioFil.checked){
            valuesRadioFils = radioFil.value;
            break;
        }
    }

    //radio sections
    let valuesRadioSections;
    for(const radioSection of radioSections){

        if(radioSection.checked){
            valuesRadioSections = radioSection.value;
            break;
        }
    }

    let covtRadFilesInt = parseFloat(valuesRadioFils)
    let covtRadSectionsInt = parseFloat(valuesRadioSections)
    let additionInt = covtRadFilesInt * covtRadSectionsInt;
    const poursent16 = 16*0.33 //5.28
    const poursent20 = 20*0.33 //6.6
    const poursent25 = 25*0.33 //8.25

    let url;
    let gaines;

    // let gaine20 = 20;
    // let gaine25 = 25;
    // let gaine32 = 32;
    // let gaine40 = 40;


    //Pour Séction de 1,5 et une gaine de 16
    if(valuesRadioFils === "1" && valuesRadioSections === "1.38" && additionInt <= poursent16){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
    }

    if(valuesRadioFils === "2" && valuesRadioSections === "1.38" && additionInt <= poursent16){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
    }
    if(valuesRadioFils === "3" && valuesRadioSections === "1.38" && additionInt <= poursent16){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
        // </>Pour Séction de 1,5 et une gaine de 16
    }
    // Pour Séction de 1,5 et une gaine de 20
    if(valuesRadioFils === "4" && valuesRadioSections === "1.38" && additionInt <= poursent20){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-20-100-courant-10041540">Voir les produits</a>`
        gaines = '20';
    }
    //</> Pour Séction de 1,5 et une gaine de 20

    // Pour Séction de 1,5 et une gaine de 25
    if(valuesRadioFils === "5" && valuesRadioSections === "1.38" && additionInt <= poursent25){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-25-100-courant-10041940">Voir les produits</a>`
        gaines = '25';
    }
    // </>Pour Séction de 1,5 et une gaine de 25

    let newP = document.createElement('p');
    divResult.appendChild(newP);
    newP.innerHTML = `
    Il vous faut une gaine de <strong>${gaines}</strong> diamète.
    <p>
        ${url}
    </p>
  `
    
});