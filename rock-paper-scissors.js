const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'Error!';
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Anihilation! You Win!'
  } else if (userChoice === computerChoice) {
    return 'This game is a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You loose!';
    } else {
      return 'You win!';
    };
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'You loose!';
    };
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You loose!';
    } else {
      return 'You win!';
    };
  } else {
    return 'Error! You are an idiot'
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const userChoice = getUserChoice(document.querySelector('input[name="choice"]:checked').value);
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  
  alert(`You threw: ${userChoice}\nThe computer threw: ${computerChoice}\n${result}`);
});
