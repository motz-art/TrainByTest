import React, { Component } from 'react';

class InputQuestion extends Component {
  render() {
    return (
      <div className="Question">
        <div className="Question-Message">{this.props.questionVm.querstionText}</div>
        <div className="Question-Answer">
          <input />
        </div>
      </div>
    );
  }
}

export default InputQuestion;
