import React, { Component } from 'react'

import Display from './Display';

export default class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  strike = () => {
    const strikeCount = this.state.strikes;
    //balls and strikes reset to 0 when a player reaches 3 strikes
    if (strikeCount === 2) {
      this.resetBoard();
    } else {
      this.setState({ strikes: strikeCount + 1 });
    }
  }

  ball = () => {
    const ballCount = this.state.balls;
    //balls and strikes reset to 0 when a player reaches 4 balls.
    if (ballCount === 3) {
      this.resetBoard();
    } else {
      this.setState({ balls: ballCount + 1 });
    }
  }

  foul = () => {
    const strikeCount = this.state.strikes;
    //a `foul` increases strikes up to 2
    //With two strikes a foul has no effect, count stays at 2 strikes.
    if (strikeCount < 2) {
      this.setState({ strikes: strikeCount + 1 });
    }
  }

  //balls and strikes reset to 0 when a `hit` is recorded.
  hit = () => {
    this.resetBoard();
  }

  //Function to reset for next player 'at bat' 
  resetBoard = () => {
    this.setState({ balls: 0, strikes: 0 });
  }

  render() {
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <div className="buttons">
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.foul}>Foul</button>
          <button onClick={this.hit}>Hit</button>
        </div>
      </>
    )
  }
}
