import React from 'react';
import '../style.css';
import {play, MOVE} from '../service/rule';

const MOVES = [MOVE.rock, MOVE.scissors, MOVE.paper];
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
    super(props);
    this.state = {
      selectedMove: MOVE.rock,
      move: null,
      opponentMove: null,
      result: null
    };
  }

  onChange = (event) => {
    this.setState({selectedMove: event.target.value});
  }

  onClick = () => {
    const opponentMove = this.state.selectedMove ? MOVES[Math.floor(Math.random() * MOVES.length)] : null;
    const result = play(this.state.selectedMove, opponentMove);
    this.setState({
      move: this.state.selectedMove, opponentMove, result
    });
  }

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
            <option value={MOVE.rock}>ぐー</option>
            <option value={MOVE.scissors}>ちょき</option>
            <option value={MOVE.paper}>ぱー</option>
          </select>
          <button className="button" onClick={this.onClick}>じゃんけんぽん</button>
        </div>
        {resultView}
      </div>
    );
  }
}
