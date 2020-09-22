import React from 'react';
import '../style.css';
import {play, MOVE} from '../service/rule';

const MOVES = [MOVE.rock, MOVE.scissors, MOVE.paper];
const i18n = require('../i18n.json');

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
            <p>{i18n.player.myself}: {move}</p>
            <p>{i18n.player.opponent}: {opponentMove}</p>
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
            <option value={MOVE.rock}>{i18n.move.rock}</option>
            <option value={MOVE.scissors}>{i18n.move.scissors}</option>
            <option value={MOVE.paper}>{i18n.move.paper}</option>
          </select>
          <button className="button" onClick={this.onClick}>じゃんけんぽん</button>
        </div>
        {resultView}
      </div>
    );
  }
}
