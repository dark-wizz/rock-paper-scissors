let userScore = 0;
let comScore = 0;

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  let result = '';
  switch(choice){
    case 0 : result = 'Rock'; break;
    case 1 : result = 'Paper'; break;
    case 2 : result = 'scissor'; break;
  }
  return result
}

function play(userChoice){
  let comChoice = getComputerChoice().toLowerCase();
  let wonMess = `You Won!, ${userChoice} beats ${comChoice}`;
  let loseMess = `You Lose!, ${comChoice} beats ${userChoice}`

  if(userChoice==comChoice){
    return `Draw!, Both chose ${userChoice}-${comChoice}`;
  }
  switch(userChoice){
    case 'rock':
      if(comChoice=='scissor'){ userScore++; return wonMess; }
    case 'paper':
      if(comChoice=='rock'){ userScore++; return wonMess; }
    case 'scissor':
      if(comChoice=='paper'){ userScore++; return wonMess; }
  }
  comScore++;
  return loseMess;
}

function choiceClick(){
    result.textContent = play(this.id);
    document.querySelector('#userScore').textContent = userScore;
    document.querySelector('#comScore').textContent = comScore;
    if(userScore==3 || comScore==3){
      choiceBtns.style.visibility = 'hidden';
      playBtn.textContent = 'Reset';
      playBtn.style.visibility = 'visible';
      result.textContent = (userScore==3)? 'You Won!' : 'You Lose!';
    }
}

function playClick(){
  userScore = 0; comScore = 0;
  choiceBtns.style.visibility = 'visible';
  playBtn.style.visibility = 'hidden';
  table.forEach(elem => {
    elem.style.visibility = 'visible';
  })
}

function resetClick(){
  choiceBtns.style.visibility = 'hidden';
  playBtn.style.visibility = 'visible';
  table.forEach(elem => {
    elem.style.visibility = 'hidden';
  })
}

const layout = document.querySelector('.layout');

const table = document.querySelectorAll('.score *');

const result = document.querySelector('.result');

const buttons = document.querySelectorAll('.choice button');
buttons.forEach(btn => {
  btn.addEventListener('click', choiceClick)
})

const choiceBtns = document.querySelector('.choice');

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', playClick)

layout.appendChild(result); 


