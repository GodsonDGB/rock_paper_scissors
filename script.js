let humanScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll(".choice");
const resetBtn = document.querySelector("#reset");

function getComputerChoice() {
    const choices = ["pierre", "papier", "ciseaux"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice){
    const humanWins = 
            (humanChoice === "pierre" && computerChoice === "ciseaux") || 
            (humanChoice === "papier" && computerChoice === "pierre") || 
            (humanChoice === "ciseaux" && computerChoice === "papier");

    if (humanChoice === computerChoice) {
        return {vainqueur: "Egalité", message: `VOUS AVEZ TOUS LES DEUX CHOISIS
            - ${humanChoice}`
        }

    }if (humanWins) {
        humanScore++ ;
        return {vainqueur:"VOUS", message: `VOUS AVEZ REMPORTE CETTE MANCHE - 
            - ${humanChoice} BAT ${computerChoice} `};
    }else {
        computerScore++ ;
         return {vainqueur:"L'IA", message:`VOUS AVEZ PERDU CETTE MANCHE
            - ${computerChoice} BAT ${humanChoice}`};
    }        
}

function updateUI(roundResult){
    resultText.textContent = roundResult.message;
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function disableButtons() {buttons.forEach(btn => btn.disabled = true); }
function enableButtons() {buttons.forEach(btn => btn.disabled = false); }

function checkWinner(){
    if(humanScore === 5 || computerScore === 5){
        const finalMsg = humanScore === 5
        ? "🎉BRAVO VOUS AVEZ REMPORTE LA PARTIE !"
        : "💻L'IA A REPORTE LA PARTIE.";
        resultText.textContent = finalMsg; // Show final message
        disableButtons(); // Disable buttons when game ends
        resetBtn.hidden = false; // Show reset button
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        updateUI(roundResult);
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultText.textContent = "NOUVELLE PARTIE - CHOISIS !";
    enableButtons();
    resetBtn.hidden = true;
})