import React, { Component } from 'react';
import questionService from '../../Services/question-service.js';
import QuestionView from './QuestionView/QuestionView.js';

class Test extends Component {
  constructor(props) {
    super(props);

    var questionVm = questionService.getRandom();
    this.state = {
      questionVm,
      stateName: 'ask',
      result: null
    };

    this.checkResult = this.checkResult.bind(this);
  }

  checkResult(answer) {
    this.setState({ result: this.state.questionVm.test(answer), stateName: 'result' });
  }

  render() {
    return (
      <QuestionView questionVm={this.state.questionVm} stateName={this.state.stateName} result={this.state.result} checkResult={this.checkResult} />
    );
  }
}

export default Test;
