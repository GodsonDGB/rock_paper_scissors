
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "pierre";
    }else if (computerChoice > 0.66) {
        return "papier";  
    }else {
        return "ciseaux";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Let's GO! PIERRE PAPIER OU CISEAUX").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if (computerChoice === humanChoice) {
        return "Le prochain tour peut être. MATCH NUL.";
    }else if (
        (computerChoice === "pierre" && humanChoice === "papier") || 
        (computerChoice === "papier" && humanChoice === "ciseaux") || 
        (computerChoice === "ciseaux" && humanChoice === "papier")
    ) {
        humanScore++ ;
        return "VOUS AVEZ GAGNE";
    }else {
        computerScore++ ;
        return "VOUS AVEZ PERDU";
    }
    
}

function playGame(){
    for(let i = 1; i <= 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(computerSelection,humanSelection);
        console.log(`Manche ${i}: ${result} (Vous:${humanScore},IA:${computerScore})`);

    }

    if (computerScore === humanScore){
            console.log("PAS DE CHANCE. MATCH NUL AU BOUT DES CINQ MANCHES.");
        
        }else if(computerScore < humanScore) {
            console.log("VOUS ETES LE GRAND GAGNANT.");
        }
        else{
            console.log("VOUS ETES LE GRAND PERDANT.");
        }

    }

playGame()