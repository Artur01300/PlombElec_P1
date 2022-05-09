
const form = document.getElementById('form');
const longueur = document.getElementById('longueur');
const largeur = document.getElementById('largeur');
const hauteur = document.getElementById('hauteur');
const semiEnterre = document.getElementById('semiEnterre');
const horsSol = document.getElementById('horsSol');


 
// console.log(hauteur, "sdfsf")

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(longueur.value, largeur.value, hauteur.value, semiEnterre.value, horsSol.value,)
})

