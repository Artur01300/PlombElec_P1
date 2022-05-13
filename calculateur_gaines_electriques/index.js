const selectOpts = document.getElementById('selectOpts');
const radioSections = document.querySelectorAll('input[name="radioSections"]');
const radioFils = document.querySelectorAll('input[name="fils"]');
const divResult = document.getElementById('result');

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

    let covtRadFilesInt = parseFloat(valuesRadioFils);
    let covtRadSectionsInt = parseFloat(valuesRadioSections);
    let additionInt = covtRadFilesInt * covtRadSectionsInt;

    const poursent16 = 16*0.33 //5.28
    const poursent20 = 20*0.33 //6.6
    const poursent25 = 25*0.33 //8.25
    const poursent32 = 32*0.33 //10.89

    let url;
    let gaines;

    //Pour Séction de 1,5 
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

    if(valuesRadioFils === "4" && valuesRadioSections === "1.38" && additionInt <= poursent20){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-20-100-courant-10041540">Voir les produits</a>`
        gaines = '20';
    }

    if(valuesRadioFils === "5" && valuesRadioSections === "1.38" && additionInt <= poursent25){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-25-100-courant-10041940">Voir les produits</a>`
        gaines = '25';
    }
    // </>Pour Séction de 1,5

    //Pour Séction de 2,5
    if(valuesRadioFils === "1" && valuesRadioSections === "1.78" && additionInt <= poursent16){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
    }
    if(valuesRadioFils === "2" && valuesRadioSections === "1.78" && additionInt <= poursent16){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
    }
    if(valuesRadioFils === "3" && valuesRadioSections === "1.78" && additionInt <= poursent20){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-20-100-courant-10041540">Voir les produits</a>`
        gaines = '20';
    }
    if(valuesRadioFils === "4" && valuesRadioSections === "1.78" && additionInt <= poursent25){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-25-100-courant-10041940">Voir les produits</a>`
        gaines = '25';
    }
    if(valuesRadioFils === "5" && valuesRadioSections === "1.78" && additionInt <= poursent32){
        url = 
        `
            <a class="link" href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-sp-gris-tag-32-50-courant-10042724">Voir les produits</a>
        `
        gaines = '32';
    }
    //</>Pour Séction de 2,5


    let newP = document.createElement('p');
    newP.classList.add("containDescript")
    divResult.appendChild(newP);
    newP.innerHTML = `
    Il vous faut une gaine de -${gaines}- diamète.
    <p class="containrerLink">
        ${url}
    </p>
  `
});