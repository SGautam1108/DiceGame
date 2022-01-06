function myFunction(){
    function createDiceRandom(){
        return Math.floor(Math.random()*6) + 1;
    }
    
    var 
    random1 = createDiceRandom(), 
    random2 = createDiceRandom(),
    img = document.querySelectorAll(".die-img"),
    imgShadow = document.querySelectorAll(".img-shadow"),
    mainTitle = document.querySelector(".page-title"),
    player1 = document.querySelectorAll(".player-title")[0],
    player2 = document.querySelectorAll(".player-title")[1],
    victoryMessage = "";
    
    img[0].setAttribute("src", "images/dice" + random1 + ".png");
    img[1].setAttribute("src", "images/dice" + random2 + ".png");

    

    if(random1 > random2){
        victoryMessage = "<i class='fas fa-flag'></i> " + player1.textContent + " Wins";
    } else if(random2 > random1){
        victoryMessage = player2.textContent + " Wins <i class='fas fa-flag'></i>";
    } else {
        victoryMessage = "That's a draw";
    }
    
    mainTitle.innerHTML = victoryMessage;

    for(var i = 0 ; i < img.length; i++){
        img[i].classList.add("shake-transition");
    }

    for(var i = 0 ; i < imgShadow.length; i++){
        imgShadow[i].classList.add("shadow-transition");
    }

    setTimeout(function(){
        img.forEach(function(image){
            image.classList.remove("shake-transition");
        });
    }, 1000);

    setTimeout(function(){
        imgShadow.forEach(function(shadow){
            shadow.classList.remove("shadow-transition");
        });
    }, 1000);

}

function editNames(){
    var
    player1 = document.querySelectorAll(".player-title")[0],
    player2 = document.querySelectorAll(".player-title")[1],
    name1 = prompt("Enter Name of P1"),
    name2 = prompt("Enter Name of P2");

    player1.innerHTML = name1;
    player2.innerHTML = name2;
}