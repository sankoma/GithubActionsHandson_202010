import React from 'react';
import Play from './Play'

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>じゃんけんアプリ</h1>
        </header>
        <Play />
      </div>
    )
  }
}
