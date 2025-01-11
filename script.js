
    // Possible choices
    const choices = ["rock", "paper", "scissors"];

    // Initialize scores
    let playerScore = 0;
    let computerScore = 0;

    // Function to get the computer's random choice
    const getComputerChoice = () => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    };

    // Function to determine the winner
    const getWinner = (player, computer) => {
      if (player === computer) {
        return "It's a tie!";
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    };

    // Function to update scores
    const updateScores = (result) => {
      if (result === "You win!") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
      } else if (result === "Computer wins!") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
      }
    };

    // Main game logic
    const playGame = (playerChoice) => {
      const computerChoice = getComputerChoice(); // Get the computer's choice
      const result = getWinner(playerChoice, computerChoice); // Determine the winner

      // Update the result display
      document.getElementById("result").innerHTML = `
        <h2>Player chooses: <strong>${playerChoice}</strong><br>
        Computer chooses: <strong>${computerChoice}</strong><br>
        <strong>${result}</strong></h2>
      `;

      // Update the scores
      updateScores(result);
    };

    // Event listeners for buttons
    document.getElementById("Rock").addEventListener("click", () => playGame("rock"));
    document.getElementById("Paper").addEventListener("click", () => playGame("paper"));
    document.getElementById("Scissors").addEventListener("click", () => playGame("scissors"));

    // Reset button functionality
    document.getElementById("reset").addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      document.getElementById("player-score").textContent = playerScore;
      document.getElementById("computer-score").textContent = computerScore;
      document.getElementById("result").innerHTML = "<h2>Make your move to see the results!</h2>";
    });
  