const form = document.getElementById('formId');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');
const selectOpts = document.getElementById('selectOpts');
const alditude = document.getElementById('alditude');
const radioButtons = document.querySelectorAll('input[name="geographie"]');
const divResult = document.getElementById('result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let metrCube = longueur.value * largeur.value * hauteur.value;
    let selectegeographie;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            selectegeographie = radioButton.value;
            break;
        }
    }


    let result = 0;
    let url;

    if(alditude.checked == true){
        //Sud de la France
        if(selectOpts.value === "Sud de la France" && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Sud de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
             url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Sud de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }

         //Centre de la France
         if(selectOpts.value === "Centre de la France" && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Centre de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Centre de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }

        //Nord de la France
        if(selectOpts.value === "Nord de la France" && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Nord de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Nord de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
    }
    else{
        //Sud de la France
        if(selectOpts.value === "Sud de la France" && selectegeographie == "option1"){
            result = metrCube;
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Sud de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Sud de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }


        //Centre de la France
        if(selectOpts.value === "Centre de la France" && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Centre de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Centre de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }

        //Nord de la France
        if(selectOpts.value === "Nord de la France" && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Nord de la France" && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
        else if(selectOpts.value === "Nord de la France" && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Voir les produits</a>`;
        }
    }
  
    let newP = document.createElement('p');
    divResult.appendChild(newP);
    let resultRound = Math.round(result);

    divResult.innerHTML =
    `
        <div class="containDescript">
         <p>Il vous faut une pompe à chaleur ayant un volume de <span class="resultInner">${result}</span>m³</p>
            <p class="containrerLink">
                ${url}
            </p>
        </div>    
    `
});

