import React, { Component } from 'react';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      the: 'The',
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      the2: 'the',
      adj2: "",
      noun2: "",
    };
    
  }
  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = {
      the: 'The',
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      the2: 'the',
      adj2: this.state.adj2,
      noun2: this.state.noun2,
    };

    const line = Object.values(newLine).map((value) => {
      return value; 
    }).join(" ");


  
    this.props.addLineCallback(line);

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.usernum}</h3>

        <form onSubmit={this.onFormSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {/* iterate throught an array of placeholder text */}
            <p>The</p>
            <input
              name="adj1"
              placeholder="adjective"
              type="text" 
              onChange={this.onInputChange}/>
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} />
            <input
              name="adv"
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange} />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.onInputChange} />
            <p>the</p>
            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
