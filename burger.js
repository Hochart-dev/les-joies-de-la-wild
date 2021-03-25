const content = document.querySelector('#hamburger-content');
const sideBarBody = document.querySelector('#hamburger-sidebar-body');
const button = document.querySelector('#hamburger-button');
const overlay = document.querySelector('#hamburger-overlay');
const activatedClass = 'hamburger-activated';


sideBarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e){
  e.preventDefault();

  this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e){
  if(this.parentNode.classList.contains(activatedClass)){
    if(e.repeat === false && e.which === 27)
    this.parentNode.classList.remove(activatedClass);


  }

});

overlay.addEventListener('click', function(e){
  e.preventDefault();
  
  this.parentNode.classList.remove(activatedClass);

})

































/*function appendCharacter(charName){
    const main = document.querySelector("main");

    const newDiv = document.createElement(".mainBox");

    const newImage = document.createElement("img");
    newBackground.attributes. alt ="";
    newBackground.src = "assets/img/BackEnd.jpg";
    
    newArticle.appendChild(newBackground);

    const newTitle = document.createElement("h2");
    

    newArticle.appendChild(newTitle);

    main.appendChild(newDiv);
}

//appendCharacter("nom de l'image");              /*a degager apres avoir ajouté la boucle for*/
//appendCharacter("autre nom de l'image");        /*a degager apres avoir ajouté la boucle for*/


//const characters = ["img1","img2"];
//for(let i = 0; i < characters.length,i++){
  //  console.log(characters[i]);
//}gogo*/