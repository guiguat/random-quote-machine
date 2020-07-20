import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {color, author, text} = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    async function getQuotes(){
      fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        dispatch({type:"GET_QUOTES", payload: data})
      });
    }
    try {
      getQuotes()
    } catch (error) {
      alert(error)
    }
  },[dispatch]);

  const handleSubmit = () => {
    dispatch({type: "NEW_QUOTE"})
  }

  return (
    <div className="App" style={{backgroundColor: `${color}`}}>
      <div id="quote-box">
        <div className="quote-text">
          <p id="text" style={{color: `${color}`}}>
            "{text}"
          </p>
        </div>
        <div className="quote-author">
          <span id="author" style={{color: `${color}`}}> - {author}</span>
        </div>
        <div className="buttons">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${text} - ${author}`} 
          id="tweet-quote" style={{backgroundColor: `${color}`}} className="btn">
            <img src="https://img.icons8.com/metro/26/ffffff/twitter.png" alt="Tweet Quote"/>
          </a>
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
