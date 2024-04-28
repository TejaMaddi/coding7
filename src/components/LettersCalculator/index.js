// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: ''}

  Action = event => {
    const {value} = event.target
    this.setState({
      phrase: value,
    })
  }

  render() {
    const {phrase} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="i1"
              alt="letters calculator"
            />
          </div>
          <div className="description">
            <h1 className="h1">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="search"
              className="form"
              placeholder="Enter the phrase"
              id="phraseText"
              value={phrase}
              onChange={this.Action}
            />

            <p className="p1">No.of letters: {phrase.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
