function validate(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error = document.getElementById("error");
    
    error.style.padding = "8px";

    const censure = ["connard", "debilos", "salaud", "fuck", "raclure de bidet"] 
    
    
    if(name.length < 3){
      text = "Ton nom est trop court!";
      error.innerHTML = text;
      return false;
    }

    if(email.length < 5){
        text = "Ton addresse email est incorrecte, ouvre les yeux!!!";
        error.innerHTML = text;
        return false;
      }

    if(message.length <= 50){
      text = "Il faut minimum 50 lettres pour envoyer ton message!!!";
      error.innerHTML = text;
      return false;
    }
    for (let i = 0; i < censure.length; i++) {
        if (message.includes(censure[i])) {
        text = "On reste polie SVP";
        error.innerHTML = text;
        return false;
        }
      }

    alert("Formulaire envoyé, BRAVO!!!");
    return true;
  }


  function play() {
    var audio = new Audio('assets/mp3/ka-ching.mp3');
    audio.play();
  }


  