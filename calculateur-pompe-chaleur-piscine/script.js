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
        if(selectOpts.selectedIndex === 0 && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 0 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
             url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 0 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }

         //Centre de la France
         if(selectOpts.selectedIndex === 1 && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 1 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 1 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }

        //Nord de la France
        if(selectOpts.selectedIndex === 2 && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 2 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 2 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
    }
    else{

        //Sud de la France
        if(selectOpts.selectedIndex === 0 && selectegeographie == "option1"){
            result = metrCube;
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 0 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 0 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        //Centre de la France
        if(selectOpts.selectedIndex === 1 && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 1 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 1 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }

        //Nord de la France
        if(selectOpts.selectedIndex === 2 && selectegeographie == "option1"){
            result = metrCube + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 2 && selectegeographie == "option2"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
        else if(selectOpts.selectedIndex === 2 && selectegeographie == "option3"){
            result = metrCube + (metrCube * 0.20) + (metrCube * 0.25);
            url = `<a href="https://www.plombelecdistribution.com/products/pompe-chaleur-alfea-extensa-ai-5-mono-atlantic-526200-3410535262007">Découvrez nos produits correspondant</a>`;
        }
    }

    let newP = document.createElement('p');
    divResult.appendChild(newP);

    divResult.innerHTML =
    `
        <div class="containDescript">
         <p>Il vous faut une pompe à chaleur pour un volume de <span class="resultInner">${result} m³</span></p>
            <p class="containrerLink">
                ${url}
            </p>
        </div>
    `
});
