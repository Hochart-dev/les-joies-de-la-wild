

function appendCharacter(charName){
    const main = document.querySelector("main");

    const newArticle = document.createElement("artcile");

    const newBackground = document.createElement("img");
    newBackground.attributes. alt ="";
    newBackground.src = "assets/img/fb.png";
    newBackground.classList.add("background");
    newArticle.appendChild(newBackground);

    const newCharacter = document.createElement("img");
    newCharacter.attributes. alt ="";
    newCharacter.src = "assets/img/twitter.jpg";
    newCharacter.classList.add("character");
    newArticle.appendChild(newCharacter);

    main.appendChild(newArticle);
}

appendCharacter("nom de l'image");              /*a degager apres avoir ajouté la boucle for*/
appendCharacter("autre nom de l'image");        /*a degager apres avoir ajouté la boucle for*/


const characters = ["img1","img2"];
for(let i = 0; i < characters.length,i++){
    console.log(characters[i]);
}