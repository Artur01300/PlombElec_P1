const selectOpts = document.getElementById('selectOpts');
const radioSections = document.querySelectorAll('input[name="radioSections"]');
const radioFils = document.querySelectorAll('input[name="fils"]');
const divResult = document.getElementById('result');
const formId = document.getElementById('formId');

const radioCombinFils = document.querySelectorAll('input[name="combinFils"]');
const radiocombinSections = document.querySelectorAll('input[name="combinRadioSections"]');

console.log(radiocombinSections)

formId.addEventListener('submit', (e)=>{
    e.preventDefault();

    let valuesRadioFils;
    let valuesRadioSections;

    function boucleRadios(radios, sections){
        for(const radio of radios){
    
            if(radio.checked){
                valuesRadioFils = radio.value;
            }
        }

        for(const section of sections){

            if(section.checked){
                valuesRadioSections = section.value;
            }
        }
    }

    boucleRadios(radioFils, radioSections);

    /** 
     * Etap 1
        Pour bien choisir le diamètre de ces gaines électriques, il faut convertir les sections par dimamètre(mm² par mm):
        - voir le tableau de conversion .pbd
        par exemple pour notre section 1,5mm² on a besoin 1.38mm

    * Etap 2
        multiplier nombre de câble par une secton (3*1.38)
        le résultat doit être inférieur ou égal de 0,33.33% (<=)

    */
    let covtRadFilesInt = parseFloat(valuesRadioFils);
    let covtRadSectionsInt = parseFloat(valuesRadioSections);
    let additionInt = covtRadFilesInt * covtRadSectionsInt;

    const poursent16 = 16*0.33; //5.28
    const poursent20 = 20*0.33; //6.6
    const poursent25 = 25*0.33; //8.25
    const poursent32 = 32*0.33; //10.89

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
    
    divResult.innerHTML =
    `
        <div class="containDescript">
            <p>Il vous faut une gaine de diamètre <span class="resultInner">${gaines}</span></p>
            <p class="containrerLink">
                ${url}
            </p>
        </div>    
    `
});


const radioCombiner = document.getElementById('combiner');
const containter = document.getElementById('containter_combin');


radioCombiner.addEventListener('change', (e)=>{
    e.preventDefault();
    
    if(radioCombiner.checked){
        containter.style.display = "initial"
    }
    else{
        containter.style.display = "none"
    }
});