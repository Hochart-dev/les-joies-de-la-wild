

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

function play() {
    //var audio = new Audio('assets/mp3/modem.mp3');
    const audio = document.querySelector("#toto");
    audio.play();
    document.body.removeEventListener("click", play);
}
document.body.addEventListener("click", play);