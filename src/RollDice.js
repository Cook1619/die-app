import React, { Component } from 'react'
import Die from './Die'
import './Rolldice.css'

export default class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = { die1: 'one', die2: 'two', rolling: false }
    }
    roll = () => {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({
            die1: newDie1,
            die2: newDie2,
            rolling: true
        })
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render() {
        const {die1, die2, rolling} = this.state
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                <Die face={die1} rolling={rolling}/>
                <Die face={die2} rolling={rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling.....' : 'Roll Dice!!'}
                </button>
            </div>
        )
    }
}
