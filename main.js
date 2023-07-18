let userScore = 0,
    computerScore = 0;
const rock = document.querySelector('#r'),
    paper = document.querySelector('#p'),
    scissors = document.querySelector('#s'),
    result = document.querySelector('.result'),
    userDisplay = document.querySelector('.user-score'),
    compDisplay = document.querySelector('.comp-score');

const getComputerChoice = () => {
  const choice = ['r', 'p', 's'];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice]
}

const wins = () => {
  userScore += 1
  userDisplay.innerHTML = userScore;
  console.log("xins")
  console.log('score is', userScore)
}

const lose = () => {
  computerScore += 1;
  compDisplay.innerHTML = computerScore
  console.log("lost")

  // console.log('comp score', computerScore)
}

const drawGame = () => {
  console.log('this game is a draw')
}

const game = (userChoice) => {
  const compChoice = getComputerChoice()
  console.log(compChoice)
  switch(userChoice + compChoice) {
    // handle the cases where the user wins
    case "pr":
    case "sp":
    case "rs":
      wins();
      break;
      // handle the case where the computer wins
    case "sr":
    case "rp":
    case "ps":
      lose();
      break;
      // handl the case where there is a draw
    case 'rr':
    case 'pp':
    case 'ss':
      drawGame()
      break;
  }
}

rock.addEventListener('click', () => {
  game('r')
});

paper.addEventListener('click', () => {
  game('p')
})

scissors.addEventListener('click', () => {
  game('s')
})

const main = () => {
}

