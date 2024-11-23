function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const resultElement = document.getElementById("result");
  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultMessage = "It's a draw!";
    resultElement.style.backgroundColor = "gray";
    resultElement.style.color = "white";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    resultMessage = "You win!";
    resultElement.style.backgroundColor = "green";
    resultElement.style.color = "white";
  } else {
    resultMessage = "You lose!";
    resultElement.style.backgroundColor = "red";
    resultElement.style.color = "white";
  }

  // Display the result message
  resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${resultMessage}`;
  resultElement.style.padding = "10px";
  resultElement.style.borderRadius = "10px";
  resultElement.style.marginTop = "20px";
  resultElement.style.textAlign = "center";
}

// firstDiv = document.querySelector(".container");
// let newElement = m.createElement("p");
// newElement.textContent = "Hello World!";
// console.log(newElement);
// // firstDiv.appendchild(newElement);

// let newElement = document.createElement("img");
// newElement.style.width = "100px";
// newElement.src =
//   "https://static.vecteezy.com/system/resources/thumbnails/033/334/060/small/cute-boy-wearing-blank-empty-white-t-shirt-mockup-for-design-template-ai-generated-free-photo.jpg";
