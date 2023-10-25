//Our greeting in JavaScript
alert("Welcome to Rock-Paper-Scissors. Let's play.");

//creating variables for our choice in Rock-Paper-Scissors
let rpsChoice = prompt("Choose one: Rock, Paper, or Scissors.", "Your choice");
rpsChoice = rpsChoice.toLowerCase(); // changes our selection to lowercase

// using an if statement to validate whether or not we made a proper choice. if we did, we get a proper response.
if (rpsChoice === "rock" || rpsChoice === "paper" || rpsChoice === "scissors") {
  alert(`You chose ${rpsChoice}. Nice.`);

  // the game AI. in order to give a the game AI a choice, we create function that has a random number generator
  function aiRPSRandom(max) {
    return Math.floor(Math.random() * max);
  }
  //this defines what choice the AI makes
  let aiChoice = aiRPSRandom(3);

  // based on the AI's number choice, we find out what choice it makes in Rock-Paper-Scissor
  let aiChoiceText;
  if (aiChoice === 0) {
    aiChoiceText = "rock";
  } else if (aiChoice === 1) {
    aiChoiceText = "paper";
  } else if (aiChoice === 2) {
    aiChoiceText = "scissors";
  }

  // this determines how we win in Rock-Paper-Scissors
  if (rpsChoice === aiChoice) {
    // if we tie RPS
    alert(
      `You chose ${rpsChoice} and I chose ${aiChoice}. Looks like its a tie.`
    );
  } else if (
    // the way to read this is "if rpsChoice = rock and aiChoiceText = scissors or..."
    // below is setting up the conditions in the () of the "else if" statement
    (rpsChoice === "rock" && aiChoiceText === "scissors") ||
    (rpsChoice === "paper" && aiChoiceText === "rock") ||
    (rpsChoice === "scissors" && aiChoiceText === "paper")
  ) {
    // if we win RPS
    alert(`Your ${rpsChoice} beats my ${aiChoiceText}! Nice job.`);
  } else {
    // if we lose RPS
    alert(`My ${aiChoiceText} beats your ${rpsChoice}! Better luck next time.`);
  }
} else {
  // this is if someone doesn't put the proper selection in RPS. basically ends the RPS
  alert("That is not a choice. Try again.");
}
