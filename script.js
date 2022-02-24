const pixContainer = document.getElementById("pix-container");
const diezButton = document.getElementById("diez");
const treintaButton = document.getElementById("treinta");
const sesentaButton = document.getElementById("sesenta");
const fragment = document.createDocumentFragment();

function crearPix(cantidad, pixclass){
    let clasePix = pixclass;
    for(let i = 0; i < cantidad; i++){
        const div = document.createElement("div");
        div.className(`${clasePix}`);
        fragment.appendChild(div);
    }
    pixContainer.appendChild(fragment);
}

diezButton.addEventListener("click", () =>{
    pixContainer.className("diezPixContainer");
    crearPix(256, "treintaPix")

})