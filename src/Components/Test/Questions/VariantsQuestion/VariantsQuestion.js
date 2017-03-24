import React, { Component } from 'react';

class VariantsQuestion extends Component {
  variants() {
    return Array.isArray(this.props.questionVm.variants) && this.props.questionVm.variants.map((text, i) => (<div key={i} className="VariantsQuestion-Variant">{text}</div>));
  }
  render() {
    return (
      <div className="Question">
        <div className="Question-Message">{this.props.questionVm.querstionText}</div>
        <div className="Question-Answer">
          {this.variants()}
        </div>
      </div>);
  }
}

export default VariantsQuestion;
