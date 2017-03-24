import React, { Component } from 'react';
import questionService from '../../Services/question-service.js';
import QuestionView from './QuestionView/QuestionView.js';

class Test extends Component {
  constructor(props) {
    super(props);

    var questionVm = questionService.getRandom();
    this.state = {
      questionVm
    };
  }
  render() {
    return (
      <QuestionView questionVm = { this.state.questionVm } />
    );
  }
}

export default Test;
