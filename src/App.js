import './App.css';
import RollDice from './RollDice'
import Die from './Die'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        dieNumber: 1
      }
  }
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    )
  }
}

