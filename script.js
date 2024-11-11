var nameOne=prompt("Player 1, what's your name?");
var nameTwo=prompt("Player 2, what's your name?");

    document.getElementById("name1").innerHTML=nameOne;
    document.getElementById("name2").innerHTML=nameTwo;





function check(){
    var choiceOne=document.getElementById("choice1").value;
    var choiceTwo=document.getElementById("choice2").value;

    if(choiceOne=="rock"){
        if(choiceTwo=="rock"){
            alert("No winner! Play again.");
        }
        else if(choiceTwo=="paper"){
            alert("Player 2 wins!");
        }
        else if(choiceTwo=="scissors"){
            alert("Player 1 wins!");
        }
        else{
            alert("Error: enter rock, paper or scissors.");
        }
        hideFormTwo()

    }
    else if(choiceOne=="paper"){
        if(choiceTwo=="rock"){
            alert("Player 1 wins!");
        }
        else if(choiceTwo=="paper"){
            alert("No winner! Play again.");
        }
        else if(choiceTwo=="scissors"){
            alert("Player 2 wins!");
        }
        else{
            alert("Error: enter rock, paper or scissors.");
        }
        hideFormTwo()

    }
    else if(choiceOne=="scissors"){
        if(choiceTwo=="rock"){
            alert("Player 2 wins!");
        }
        else if(choiceTwo=="paper"){
            alert("Player 1 wins!");
        }
        else if(choiceTwo=="scissors"){
            alert("No winner! Play again.");
        }
        else{
            alert("Error: enter rock, paper or scissors.");
        }
        hideFormTwo()

    
    }
    else{
        alert("Error: enter rock, paper or scissors.");
    }
}

function hideFormOne(){
    document.getElementById("player1").style.display="none";
}
function hideFormTwo(){
    document.getElementById("player2").style.display="none";
}