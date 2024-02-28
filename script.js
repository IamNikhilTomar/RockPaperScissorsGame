let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const printWinner = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIx = Math.floor(Math.random() * 3);
  return options[randIx];
}

const drawGame = () => {
  printWinner.innerText = "Game was Draw.\u{1F62C} Play again."
  printWinner.style.backgroundColor = "#081b31"; 
};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    printWinner.innerText = `You Win!\u{1F973} Your ${userChoice} beats ${compChoice}.`;
    printWinner.style.backgroundColor = "green"; 
  } else{
    compScore++;
    compScorePara.innerText = compScore;
    printWinner.innerText = `You Lost!\u{1F613} ${compChoice} beats your ${userChoice}.`;
    printWinner.style.backgroundColor = "red"; 
  }
}

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);

  if(userChoice === compChoice){
    console.log("Game was draw.")
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    } else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});

