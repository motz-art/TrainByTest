import React, { Component } from 'react';
import VariantsQuestion from '../Questions/VariantsQuestion/VariantsQuestion.js';
import InputQuestion from '../Questions/InputQuestion/InputQuestion.js';

class QuestionView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props || !this.props.questionVm) {
      return (
        <div className="QuestionView-Error">Property questionVm is not set.</div>
      );
    }
    if (!this.props.questionVm.type) {
      return (
        <div className="QuestionView-Error">Property questionVm.type is not set.</div>
      );
    }

    if (this.props.questionVm.type == 'variants') {
      return (<VariantsQuestion questionVm={ this.props.questionVm } stateName={this.props.stateName} result={this.props.result} checkResult={this.props.checkResult}  />);
    }
    if (this.props.questionVm.type == 'input') {
      return (<InputQuestion questionVm={ this.props.questionVm } stateName={this.props.stateName} result={this.props.result} checkResult={this.props.checkResult}  />);
    }
    
    return (
      <div className="QuestionView-Error">Unfortunately {this.props.questionVm.type} question type is not supported yet :(.</div>
    );
  }
}

export default QuestionView;
