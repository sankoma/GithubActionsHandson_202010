import React from 'react';
import Play from './Play';

const i18n = require('../i18n.json');

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            {i18n.title}
          </h1>
        </header>
        <Play />
      </div>
    );
  }
}
