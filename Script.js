
let Uscore = 0
let Cscore = 0
const choices = document.querySelectorAll(".choices button")
let Us= document.querySelector("#user")
let Cs= document.querySelector("#comp")

const Cchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ranInd = Math.floor(Math.random() * 3)
    return options[ranInd];
}

const playGame = (userchoice) => {
    const compchoice = Cchoice()
    console.log(compchoice)
    if (compchoice === userchoice) {
        console.log("it's a draw")
        msg.innerText = "it's a draw"
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }
        return userwin;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        const won = playGame(userchoice);
        if (won === true) {
            console.log("you win");
            msg.innerText = "You win"
            Uscore++;
            Us.innerText = Uscore;
        }// without return statement it return undefined so no else 
        else if (won === false) {
            console.log("You lost");
            msg.innerText = "you lose"
            Cscore++;
            Cs.innerText = Cscore;
        }
    })
})

function prac(){
    return 0;
}

function again(){
    return 1;
}