

function appendContent(content){
    const main = document.querySelector(".container");
    const newMainBox = document.createElement("div");
     newMainBox.classList.add("mainBox");
    

    const newTitle = document.createElement("h2");
    newTitle.innerText = content.imgTitle;
    newTitle.classList.add("title");

    

    const newContent = document.createElement("img");
    newContent.attributes. alt ="";
    newContent.src = `assets/img/${content.imagePath}/1.jpg`;
    newContent.classList.add("content");
    
    main.appendChild(newTitle);
    main.appendChild(newMainBox);
   
    newMainBox.appendChild(newContent);
   
     
}


const contents = [
    {
        imgTitle:"when you are not taken seriously...",
        imagePath: "backEnd"
    },
    
    {
        imgTitle:"when you are really patient...",
        imagePath: "cars"
    },
    
    {
        imgTitle:"when you say Java in front of Loïc..",
        imagePath: "images"
    },
    
    {
        imgTitle:"when you take a look at your css...",
        imagePath: "failCss"
    }
];

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