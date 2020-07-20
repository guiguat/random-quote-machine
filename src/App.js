import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const {color, author, text} = useSelector(state => state.data);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch({type: "NEW_QUOTE"})
  }
  return (
    <div className="App" style={{backgroundColor: `${color}`}}>
      <div id="quote-box">
        <div className="quote-text">
          <p id="text" style={{color: `${color}`}}>
            {text}
          </p>
        </div>
        <div className="quote-author">
          <span id="author" style={{color: `${color}`}}> - {author}</span>
        </div>
        <div className="buttons">
          <a href="#" id="tweet-quote" style={{backgroundColor: `${color}`}} className="btn">Tweet Quote</a>
          <button 
            id="new-quote" 
            style={{backgroundColor: `${color}`}} 
            className="btn"
            onClick={handleSubmit}
          >New quote</button>
        </div>
      </div>
      <p id="footer">by <a href="https://github.com/guiguat">guiguat</a></p>
    </div>
  );
}

export default App;
