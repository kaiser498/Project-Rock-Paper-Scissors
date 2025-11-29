function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  let computerChoice;
  if (randomNumber <= 33) {
    computerChoice = "rock";
  } else if (randomNumber <= 66) {
    computerChoice = "paper";
  } else if (randomNumber <= 100) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "What do you choose? (Rock, Paper, or Scissors)",
    ""
  );
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "paper") {
      message = "You lose! Paper beats rock.";
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      message = "You win! Rock beats scissors.";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      message = "You lose! Scissors beats paper.";
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      message = "You win! Paper beats rock.";
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      message = "You lose! Rock beats scissors.";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      message = "You win! Scissors beats paper.";
      humanScore++;
    } else if (humanChoice === computerChoice) {
      message = "Draw!";
    }
    return [alert(message), console.log(message)];
  }

  playRound(getHumanChoice(), getComputerChoice());
  console.log("humanScore: " + humanScore, "computerScore: " + computerScore);
}

playGame();
