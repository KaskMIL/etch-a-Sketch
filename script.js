const pixContainer = document.getElementById("pix-container");

const fragment = document.createDocumentFragment();

//Crea el grid
function createPix (cantidad){
    for(let i = 0; i < cantidad; i++){
        const pix = document.createElement("div");
        pix.classList.add("pixel");
        fragment.appendChild(pix);
    }
    pixContainer.appendChild(fragment);
}
// cambia el bg de la class
pixContainer.addEventListener("mouseover", e =>{
    if(e.target.className == "pixel"){
        e.target.classList.remove("pixel");
        e.target.classList.add("pixelOn");
    }
})

createPix(30);
