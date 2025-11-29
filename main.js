let computerChoice = "";
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  if (randomNumber > 0 && randomNumber <= 33) {
    computerChoice = "rock";
  } else if (randomNumber > 33 && randomNumber <= 66) {
    computerChoice = "paper";
  } else if (randomNumber > 66 && randomNumber <= 100) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

const choiceSection = document.querySelector("#playerSelection");
let humanChoice = "";

choiceSection.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      humanChoice = "rock";
      playRound(humanChoice, getComputerChoice());
      humanScoreBoard.textContent ="Your Score: " + humanScore;
      computerScoreBoard.textContent = "Computer Score: "+computerScore;
      checkWinner();
      break;
    case "paper":
      humanChoice = "paper";
      playRound(humanChoice, getComputerChoice());
      humanScoreBoard.textContent ="Your Score: " + humanScore;
      computerScoreBoard.textContent = "Computer Score: "+computerScore;
      checkWinner();
      break;
    case "scissors":
      humanChoice = "scissors";
      playRound(humanChoice, getComputerChoice());
      humanScoreBoard.textContent ="Your Score: " + humanScore;
      computerScoreBoard.textContent = "Computer Score: "+computerScore;
      checkWinner();
      break;
  }
});

let computerScore = 0;
let humanScore = 0;
let message = "";
function playRound(humanChoice, computerChoice) {
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
  return console.log(message);
}

const humanScoreBoard = document.querySelector("#humanScoreBoard");
const computerScoreBoard = document.querySelector("#computerScoreBoard");

function checkWinner() {
  if (humanScore === 5) {
    alert("Yay! You win.");
  } else if (computerScore === 5) {
    alert("You lose! Better luck next time.");
  }
}
