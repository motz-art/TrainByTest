import React, { Component } from 'react';

class InputQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { state: 'ask', value: '' }

    this.updateValue = this.updateValue.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  updateValue(event) {
    this.setState({ value: event.target.value });
  }

  handleCheck(event) {
    if (typeof this.props.checkResult === 'function') {
      this.props.checkResult(this.state.value);
      event.preventDefault();
    }
  }

  resultMessage() {
    if (this.props.stateName === 'result') {
      return (<div className="Question-ResultMessage">{this.props.result.result ? 'Correct! :)' : 'Wrong... :('}<br /> {this.props.result.message}</div>);
    }
  }

  render() {
    return (
      <div className="Question">
        {this.resultMessage()}
        <div className="Question-Message">{this.props.questionVm.querstionText}</div>
        <div className="Question-Answer">
          <input type="text" value={this.state.value} onChange={this.updateValue} />
        </div>
        <div className="Question-Check">
          <button className="Question-CheckButton" onClick={this.handleCheck}>Check</button>
        </div>
      </div>
    );
  }
}

export default InputQuestion;
