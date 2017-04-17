import React, { Component } from 'react';
import questionService from '../../Services/question-service.js';
import QuestionView from './QuestionView/QuestionView.js';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = this.selectNextQuestion();

    this.checkResult = this.checkResult.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.selectNextQuestion = this.selectNextQuestion.bind(this);
    this.handleValueUpdate = this.handleValueUpdate.bind(this);
  }

  selectNextQuestion() {
    var questionVm = questionService.getRandom();
    return {
      questionVm,
      stateName: 'ask',
      result: null,
      value: ''
    };
  }

  handleValueUpdate(value) {
    this.setState({ value: value });
  }

  checkResult() {
    this.setState((prev) => ({ 
      result: this.state.questionVm.test(prev.value), 
      stateName: 'result' }));
  }

  nextQuestion() {
    this.setState(this.selectNextQuestion);
  }

  render() {
    return (
      <QuestionView 
        questionVm={this.state.questionVm} 
        stateName={this.state.stateName} 
        value={this.state.value} 
        result={this.state.result} 
        handleValueUpdate={this.handleValueUpdate} 
        checkResult={this.checkResult} 
        nextQuestion={this.nextQuestion}/>
    );
  }
}

export default Test;
