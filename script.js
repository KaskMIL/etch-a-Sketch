const pixContainer = document.getElementById("pix-container");
const diezButton = document.getElementById("diez");
const treintaButton = document.getElementById("treinta");
const sesentaButton = document.getElementById("sesenta");
const fragment = document.createDocumentFragment();

function pixOn(){
    pixContainer.addEventListener("mouseover", function(e){
        if(e.target.className === "diezPix"){
            e.target.className = "diezPixOn";
        }
        else if(e.target.className === "treintaPix"){
            e.target.className = "treintaPixOn";
        }
        else if(e.target.className === "sesentaPix"){
            e.target.className = "sesentaPixOn";
        }
        
    })
    
}

diezButton.addEventListener("click", function(e) {
    pixContainer.innerHTML = "";
    pixContainer.className = "diezPixContainer";

    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.className = "diezPix";
        fragment.appendChild(div);
    }
    pixContainer.appendChild(fragment)

    pixOn();

})

treintaButton.addEventListener("click", e =>{
    pixContainer.innerHTML = "";
    pixContainer.className = "treintaPixContainer";

    for(let i = 0; i < 1024; i++){
        let div = document.createElement("div");
        div.className = "treintaPix";
        fragment.appendChild(div);
    }
    pixContainer.appendChild(fragment);
})

sesentaButton.addEventListener("click", e =>{
    pixContainer.innerHTML = "";
    pixContainer.className = "sesentaPixContainer";

    for(let i = 0; i < 4096; i++){
        let div = document.createElement("div");
        div.className = "sesentaPix";
        fragment.appendChild(div);
    }
    pixContainer.appendChild(fragment);
})