function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  let result = '';
  switch(choice){
    case 0 : result = 'Rock'; break;
    case 1 : result = 'Paper'; break;
    case 2 : result = 'Scissors'; break;
  }
  return result
}

function play(){
  let userChoice = prompt('Your choice?').toLowerCase();
  let comChoice = getComputerChoice().toLowerCase();
  let wonMess = `You Won!, ${userChoice} beats ${comChoice}`;
  let loseMess = `You Lose!, ${comChoice} beats ${userChoice}`

  if(userChoice==comChoice){
    return `Draw!, Both chose ${userChoice}-${comChoice}`;
  }
  switch(userChoice){
    case 'rock':
      return (comChoice=='scissors')? wonMess : loseMess;
    case 'paper':
      return (comChoice=='rock')? wonMess : loseMess;
    case 'scissors':
      return (comChoice=='paper') ? wonMess : loseMess;
    default:
      console.log('Enter valid input!');
      return play(); 
  }
}

function game(){
  let count = 0;
  for(let i=0; i<5; i++){
    let res = play();
    console.log(res)
    if(res.charAt(4)=='W'){
      count++;
    }else if(res.charAt(4)=='L'){
      count--;
    }
  }
  console.log((count>0)? 'You Won!' : 'You Lose!');
}
