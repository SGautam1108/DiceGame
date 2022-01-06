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
    victoryMessage = "";
    
    img1.setAttribute("src", "images/dice" + random1 + ".png");
    img2.setAttribute("src", "images/dice" + random2 + ".png");
    
    if(random1 > random2){
        victoryMessage = "<i class='fas fa-flag'></i> Player 1 Wins";
    } else if(random2 > random1){
        victoryMessage = "Player 2 Wins <i class='fas fa-flag'></i>";
    } else {
        victoryMessage = "That's a draw";
    }
    
    mainTitle.innerHTML = victoryMessage;
}