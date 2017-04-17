import React, { Component } from 'react';
import QuestionStatus from './QuestionStatus.js';
import VariantsQuestion from '../Questions/VariantsQuestion/VariantsQuestion.js';
import InputQuestion from '../Questions/InputQuestion/InputQuestion.js';

class QuestionView extends Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
    this.handleValueUpdate = this.handleValueUpdate.bind(this);
  }

  handleCheck() {
    if (typeof this.props.checkResult !== 'function') {
      throw new Error('Property checkResult is required and must be a function.');
    }
    this.props.checkResult();
  }

  handleValueUpdate(value) {
    if (typeof this.props.handleValueUpdate !== 'function') {
      throw new Error('Property handleValueUpdate is required and must be a function.');
    }
    this.props.handleValueUpdate(value);
  }

  renderQuestion() {
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

    if (this.props.questionVm.type === 'variants') {
      return (<VariantsQuestion 
        questionVm={this.props.questionVm} 
        handleValueUpdate={this.handleValueUpdate} 
        value={this.props.value} />);
    }
    if (this.props.questionVm.type === 'input') {
      return (<InputQuestion 
        questionVm={this.props.questionVm} 
        handleValueUpdate={this.handleValueUpdate} 
        value={this.props.value} />);
    }

    return (
      <div className="QuestionView-Error">Unfortunately {this.props.questionVm.type} question type is not supported yet :(.</div>
    );
  }

  render() {
    return (
        <QuestionStatus 
          handleCheck={this.handleCheck}
          nextQuestion={this.props.nextQuestion}
          stateName={this.props.stateName} 
          result={this.props.result}>
          {this.renderQuestion()}
        </QuestionStatus>
    );
  }
}

export default QuestionView;
