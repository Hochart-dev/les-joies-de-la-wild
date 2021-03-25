

function appendContent(contentName){
    const main = document.querySelector(".container");
    const newMainBox = document.createElement("div");
     newMainBox.classList.add("mainBox");
    

    const newContent = document.createElement("img");
    newContent.attributes. alt ="";
    newContent.src = `assets/img/${contentName}/1.jpg`;
    
    newContent.classList.add("content");
    newMainBox.appendChild(newContent);

    /*const newTitle = document.createElement("h2");
    newTitle.src = `assets/title/${contentName}/1.txt`;
    newTitle.classList.add("title");
    newContent.appendChild(newTitle);
    */
    main.appendChild(newMainBox);
    
}

const contents = ["backEnd","cars","images","failCss"];
for(let i = 0; i < contents.length;i++) {
   appendContent(contents[i]);
  
}

const mainBox = document.querySelectorAll(".mainBox");

function appendSocial (contentName) {
const newShare = document.createElement("div");
newShare.classList.add("socialmedia");
contentName.appendChild(newShare);
const contents = ["facebook","twitter","instagram"];

for(let i = 0; i < contents.length;i++) {
    const imageLink = document.createElement('a');
    imageLink.href = `https://www.${contents[i]}.com`
    imageLink.target = "_blank";

    const newSocialcontent = document.createElement("img"); 
    newSocialcontent. attributes. alt = "";
    newSocialcontent.src = `assets/icones/${contents[i]}/1.jpg`;
    newSocialcontent.classList.add("content");

    imageLink.appendChild(newSocialcontent);
    newShare.appendChild(imageLink);
}
}

for (let i = 0; i < mainBox.length; i++) {
    appendSocial(mainBox[i]);
}