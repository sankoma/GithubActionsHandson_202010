import React from 'react';
import '../style.css'

const JANKEN = ['rock', 'scissors', 'paper'];
const RESULT = {
  win: 'win',
  lose: 'lose',
  draw: 'draw',
};
const i18n = {
  move: {
    rock: 'ぐー',
    scissors: 'ちょき',
    paper: 'ぱー',
  },
  result: {
    win: 'あなたの勝ち！',
    lose: 'あなたの負け・・・',
    draw: '引き分け',
  },
};

export default class Play extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedMove: 'rock',
      move: null,
      opponentMove: null,
      result: null
    };
  }

  onChange = (event) => {
    this.setState({selectedMove: event.target.value});
  }

  onClick = () => {
    const opponentMove = this.state.selectedMove ? JANKEN[Math.floor(Math.random() * JANKEN.length)] : null;
    const result = this.game(this.state.selectedMove, opponentMove);
    this.setState({
      move: this.state.selectedMove, opponentMove, result
    })
  }

  game = (move, opponentMove) => {
    let result;
    switch (move) {
      case 'rock':
        if (opponentMove == 'scissors') {
          result = RESULT.win;
        } else {
          result = RESULT.lose;
        }
        break;
      case 'scissors':
        if (opponentMove == 'paper') {
          result = RESULT.win;
        } else {
          result = RESULT.lose;
        }
        break;
      case 'paper':
        if (opponentMove == 'rock') {
          result = RESULT.win;
        } else {
          result = RESULT.lose;
        }
        break;
    }
    return result;
  };

  render() {
    const move = i18n.move[this.state.move];
    const opponentMove = i18n.move[this.state.opponentMove];
    const result = i18n.result[this.state.result];

    const resultView = result ? (
        <div id="resultView">
          <div>
            <p>あなた: {move}</p>
            <p>あいて: {opponentMove}</p>
          </div>
          <div id="result">
            <p>{result}</p>
          </div>        
        </div>
    ) : null;

    return (
      <div>
        <div>
          <select id="moveSelect" value={this.state.selectedMove} onChange={this.onChange}>
            <option value="rock">ぐー</option>
            <option value="scissors">ちょき</option>
            <option value="paper">ぱー</option>
          </select>
          <button className="button" onClick={this.onClick}>じゃんけんぽん</button>
        </div>
        {resultView}
      </div>
    )
  }
}
