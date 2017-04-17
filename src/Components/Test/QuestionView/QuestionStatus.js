import React, { Component } from 'react';

class QuestionStatus extends Component {
    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    handleCheck(event) {
        event.preventDefault();
        if (typeof this.props.handleCheck !== 'function') {
            throw new Error('Property handleCheck is required and must be a function.');
        }
        this.props.handleCheck();
    }

    nextQuestion(event) {
        event.preventDefault();
        if (typeof this.props.nextQuestion !== 'function') {
            throw new Error('Property nextQuestion is required and must be a function.');
        }
        this.props.nextQuestion();
    }

    resultMessage() {
        if (this.props.stateName === 'result') {
            return (<div className="Question-ResultMessage">{this.props.result.result ? 'Correct! :)' : 'Wrong... :('}<br /> {this.props.result.message}</div>);
        }
    }

    render() {
        return (
            <div className="QuestionStatus">
                {this.resultMessage()}
                {this.props.children}
                <div className="Question-Check">
                    <button className="Question-CheckButton" onClick={this.handleCheck} disabled={this.props.stateName === 'result'}>Check</button>
                </div>
                <div className="Question-Check">
                    <button className="Question-CheckButton" onClick={this.nextQuestion} disabled={this.props.stateName !== 'result'}>Next</button>
                </div>
            </div>
        );
    }
}

export default QuestionStatus;
