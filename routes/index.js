var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render ('choices');
});

/* GET turn */
router.get('/turn', function(req, res, next) {
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['rock', 'paper', 'scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render ('result', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function  getPcChoice(options){
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice){
  if(playerChoice === pcChoice){
    return 'draw';
  }
  if(playerChoice ==='rock'){
    if(pcChoice === 'paper'){
      return 'pc'
    }
    if (pcChoice === 'scissors'){
      return 'player';
    }
  }
  if(playerChoice ==='paper'){
    if(pcChoice === 'rock'){
      return 'player'
    }
    if (pcChoice === 'scissors'){
      return 'pc';
    }
  }
  if(playerChoice ==='scissors'){
    if(pcChoice === 'rock'){
      return 'pc'
    }
    if (pcChoice === 'paper'){
      return 'player';
    }
  }
  return 'invalid';
}
module.exports = router;
