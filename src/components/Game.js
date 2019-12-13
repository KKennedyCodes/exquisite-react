import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poem: [],
      line: '',
      usernum: 1,
      complete: false,
    }
  }
  
  addLine = (newLine) => {
    const poem = this.state.poem;
    poem.push(newLine);
    console.log(newLine);
    let newuser=this.state.usernum + 1;
    this.setState({ 
      poem,
      line: newLine,
      usernum: newuser,
    });
  }

  finishGame = (status) => {
    this.setState({
      complete: status,
    })
  }

  buildGame = () => {
    return (
      <div>
        <RecentSubmission line={this.state.line}/>
        <PlayerSubmissionForm addLineCallback={this.addLine} usernum={this.state.usernum}/>
      </div>
    )
  }
  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");
    console.log(this.state.poem);
    return (
      
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {this.state.complete ? '' : this.buildGame()}
        <FinalPoem poem={this.state.poem} complete={this.state.complete} finishGame={this.finishGame}/> 
        
      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
