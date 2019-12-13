import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  console.log(props);
// const toggleComplete = () => {

// }

const makePoem = props.poem.map((line, key) => {
  return <p key={key}>{line}</p>;
});

const showFinalPoem = () => {
  return (
    <div>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {makePoem}
      </section>
    </div>
  )
}


const toggleComplete = (event) => {
  event.preventDefault();
  props.finishGame(true);
}

const showFinalButton = () => {
  return (
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={toggleComplete}/>
    </div>
    )
}


  return (
    <div className="FinalPoem">
      { props.complete ? showFinalPoem() : showFinalButton() }
    </div>
  );
}

export default FinalPoem;
