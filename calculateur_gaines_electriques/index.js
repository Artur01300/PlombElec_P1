const selectOpts = document.getElementById('selectOpts');
const radioSections = document.querySelectorAll('input[name="radioSections"]');
const radioFils = document.querySelectorAll('input[name="fils"]');
const divResult = document.getElementById('result');
const formId = document.getElementById('formId');

const radioCombinFils = document.querySelectorAll('input[name="combinFils"]');
const radioCombinSections = document.querySelectorAll('input[name="combinRadioSections"]');

let url;
let gaines;
formId.addEventListener('submit', (e)=>{
    e.preventDefault();

    let valuesRadioFils;
    let valuesRadioSections;
    let valueRadioCombinFils;
    let valueRadioCmbinSections;



    for(const radio of radioFils){
        if(radio.checked){
            valuesRadioFils = radio.value;
        }
    }
    for(const section of radioSections){
        if(section.checked){
            valuesRadioSections = section.value;
        }
    }
    // Combiner fils et section
    for(const radio of radioCombinFils){
        if(radio.checked){
            valueRadioCombinFils = radio.value;
        }
    }
    for(const section of radioCombinSections){
        if(section.checked){
            valueRadioCmbinSections = section.value;
        }
    }

    /** 
     * Etap 1
        Pour bien choisir le diamètre de ces gaines électriques, il faut convertir les sections par dimamètre(mm² par mm):
        - voir le tableau de conversion .pbd
        par exemple pour notre section 1,5mm² on a besoin 1.38mm

    * Etap 2
        multiplier nombre de câble par une secton (3*1.38)
        le résultat doit être inférieur ou égal de 0,33.33% (<=)

    */
    let covtRadioFils = parseFloat(valuesRadioFils);
    let covtRadioSections = parseFloat(valuesRadioSections);
    let totalResultRadios1 = covtRadioFils * covtRadioSections;

    //Combiner fils et section
    let covtRadioRadioCombinFils = parseFloat(valueRadioCombinFils);
    let covtRadioCmbinSections = parseFloat(valueRadioCmbinSections);
    let totalResultRadios2 = covtRadioRadioCombinFils * covtRadioCmbinSections;


    const poursent16 = 16*0.3333; //5.28
    const poursent20 = 20*0.3333; //6.6
    const poursent25 = 25*0.3333; //8.25
    const poursent32 = 32*0.3333; //10.89

    if( totalResultRadios1<= poursent16 ){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
        gaines = '16';
    }
    else if ( totalResultRadios1 <= poursent20 ){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-20-100-courant-10041540">Voir les produits</a>`
        gaines = '20';
    }
    else if ( totalResultRadios1 <= poursent25 ){
        url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-25-100-courant-10041940">Voir les produits</a>`
        gaines = '25';
    }
    else if ( totalResultRadios1 <= poursent32 ){
        url = `<a class="link" href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-sp-gris-tag-32-50-courant-10042724">Voir les produits</a>`
        gaines = '32';
    }

    //Combiner fils et section
    if(radioCombiner.checked){
        let totalResult = totalResultRadios1 + totalResultRadios2;
        if( totalResult <= poursent16 ){
            url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-16-100-courant-10041140">Voir les produits</a>`
            gaines = '16';
        }
        else if ( totalResult <= poursent20 ){
            url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-20-100-courant-10041540">Voir les produits</a>`
            gaines = '20';
        }
        else if ( totalResult <= poursent25 ){
            url = `<a href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-dp-gris-tag-25-100-courant-10041940">Voir les produits</a>`
            gaines = '25';
        }
        else if ( totalResult <= poursent32 ){
            url = `<a class="link" href="https://www.plombelecdistribution.com/collections/cable-et-fil/products/gaine-electrique-galvanisee-icta-sp-gris-tag-32-50-courant-10042724">Voir les produits</a>`
            gaines = '32';
        }
        else{
            alert(`Vos fils font ${totalResult.toFixed(2)} mm, dépassent la norme recommandée : ils doivent être inférieurs ou égales 33,33% de la gaine.`);
            location.reload();
        }
    }

    
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
        containter.style.display = "block";
        divResult.innerHTML = "";
    }
    else{
        containter.style.display = "none";
        divResult.innerHTML = "";
    }
});