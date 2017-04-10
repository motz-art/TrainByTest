import React, { Component } from 'react';

class InputQuestion extends Component {
  constructor(props) {
    super(props);

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(event) {
    if (typeof this.props.handleValueUpdate !== 'function') {
      throw new Error('Property handleValueUpdate is required and must be a function.');
    }
    this.props.handleValueUpdate(event.target.value);
  }

  render() {
    return (
      <div className="Question">
        <div className="Question-Message">{this.props.questionVm.querstionText}</div>
        <div className="Question-Answer">
          <input type="text" value={this.props.value} onChange={this.updateValue} />
        </div>
      </div>
    );
  }
}

export default InputQuestion;
