let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "sissors"];
    const rendomIdx = Math.floor(Math.random() * 3);
    return options[rendomIdx];
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win..");
        msg.innerText = "You are Winner!"
    }else{
        console.log("You Lose..");
        msg.innerText = "You Lose!"
    }
}

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw!"
}


const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            // "paper" or "scissors"
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // "rock" or "scissors"
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // userChoice === "scissors"

            // compChoice === "rock" or "paper"
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

