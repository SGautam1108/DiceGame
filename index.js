function myFunction(){
    function createDiceRandom(){
        return Math.floor(Math.random()*6) + 1;
    }
    
    var 
    random1 = createDiceRandom(), 
    random2 = createDiceRandom(),
    img1 = document.querySelectorAll(".die-img")[0],
    img2 = document.querySelectorAll(".die-img")[1],
    mainTitle = document.querySelector(".page-title"),
    player1 = document.querySelectorAll(".player-title")[0],
    player2 = document.querySelectorAll(".player-title")[1],
    victoryMessage = "";
    
    img1.setAttribute("src", "images/dice" + random1 + ".png");
    img2.setAttribute("src", "images/dice" + random2 + ".png");
    
    if(random1 > random2){
        victoryMessage = "<i class='fas fa-flag'></i> " + player1.textContent + " Wins";
    } else if(random2 > random1){
        victoryMessage = player2.textContent + "Wins <i class='fas fa-flag'></i>";
    } else {
        victoryMessage = "That's a draw";
    }
    
    mainTitle.innerHTML = victoryMessage;
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