function odliczanie() {
    var dzisiaj;
    dzisiaj = new Date();


    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;

    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;

    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML = godzina + ":" + minuta + ":" + sekunda;

    setTimeout("odliczanie()", 1000);
}

function mojaoferta() {
    document.getElementById("boxToChange").innerHTML = "  Moja Oreta</br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod est vel lectus mollis feugiat. Nullam scelerisque condimentum tristique. Mauris ut scelerisque erat, ut vulputate odio. Duis rhoncus rutrum elit, vestibulum fermentum arcu. Vivamus eu pharetra ligula, id sodales felis.  </br></br>ZAPRASZAM";
    var elemets = document.getElementsByClassName("active");
    if (elemets.length > 0) {
        elemets[0].classList.remove("active");
    }
    document.getElementById("mojaoferta").classList.add("active");
}

function wyksztalcenie() {
    document.getElementById("boxToChange").innerHTML = " Wykształcenie!</br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod est vel lectus mollis feugiat. Nullam scelerisque condimentum tristique. Mauris ut scelerisque erat, ut vulputate odio. Duis rhoncus rutrum elit, vestibulum fermentum arcu. Vivamus eu pharetra ligula, id sodales felis. ";
    var elemets = document.getElementsByClassName("active");
    if (elemets.length > 0) {
        elemets[0].classList.remove("active");
    }
    document.getElementById("wyksztalcenie").classList.add("active");
}

function kontakt() {
    document.getElementById("boxToChange").innerHTML = " Kontakt<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod est vel lectus mollis feugiat. Nullam scelerisque condimentum tristique. Mauris ut scelerisque erat, ut vulputate odio. Duis rhoncus rutrum elit, vestibulum fermentum arcu. Vivamus eu pharetra ligula, id sodales felis.";
    var elemets = document.getElementsByClassName("active");
    if (elemets.length > 0) {
        elemets[0].classList.remove("active");
    }
    document.getElementById("kontakt").classList.add("active");
}

function kimjestem() {
    document.getElementById("boxToChange").innerHTML = "Kim Jestem!</br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod est vel lectus mollis feugiat. Nullam scelerisque condimentum tristique. Mauris ut scelerisque erat, ut vulputate odio. Duis rhoncus rutrum elit, vestibulum fermentum arcu. Vivamus eu pharetra ligula, id sodales felis.";
    var elemets = document.getElementsByClassName("active");
    if (elemets.length > 0) {
        elemets[0].classList.remove("active");
    }
    document.getElementById("kimjestem").classList.add("active");
}

