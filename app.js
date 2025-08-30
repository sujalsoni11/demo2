let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let userChoice = true;
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const Draw = () => {
  console.log("Its a tie!");
};

const playGame = (userChoice) => {
  console.log("User Choice:" + userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice:" + compChoice);

  // else  {

  if (userChoice === compChoice) {
    Draw();
  }
  if (userChoice === "rock" && compChoice === "paper") {
    userwin = false;
    console.log("Computer Wins!");
    compScore++;
  } else if (userChoice === "paper" && compChoice === "scissors") {
    userwin = false;
    console.log("Computer Wins!");
    compScore++;
  } else if (userChoice === "scissors" && compChoice === "rock") {
    userwin = false;
    console.log("Computer Wins!");
    compScore++;
  } else {
    if (userChoice != compChoice) {
      userScore++;
    }
  }

  return compChoice;
};
//  };

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice is been clicked  " + userChoice);
    playGame(userChoice);
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;
    document.getElementById(
      "msg"
    ).innerText = `You chose ${userChoice}, Computer chose ${genCompChoice()}`;
  });
});
