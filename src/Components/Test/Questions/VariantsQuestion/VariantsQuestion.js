import React, { Component } from 'react';

class VariantsQuestion extends Component {
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

  variants() {
    return Array.isArray(this.props.questionVm.variants) && 
      this.props.questionVm.variants.map((text, i) => (
        <div key={i} className="VariantsQuestion-Variant">
          <label>
            <input type="radio" name="variant" value={text} checked={this.props.value===text} onChange={this.updateValue}  />{text}
          </label>
        </div>
      ));
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
