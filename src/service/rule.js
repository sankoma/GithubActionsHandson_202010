export const MOVE = {
  rock: 'rock',
  scissors: 'scissors',
  paper: 'paper'
};
export const RESULT = {
  win: 'win',
  lose: 'lose',
  draw: 'draw',
};

export const play = (move, opponentMove) => {
  let result;
  switch (move) {
    case MOVE.rock:
      if (opponentMove === MOVE.scissors) {
        result = RESULT.win;
      } else {
        result = RESULT.lose;
      }
      break;
    case MOVE.scissors:
      if (opponentMove === MOVE.paper) {
        result = RESULT.win;
      } else {
        result = RESULT.lose;
      }
      break;
    case MOVE.paper:
      if (opponentMove === MOVE.rock) {
        result = RESULT.win;
      } else {
        result = RESULT.lose;
      }
      break;
    default:
      result = RESULT.draw;
  }
  return result;
};
