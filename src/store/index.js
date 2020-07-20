import { configureStore } from '@reduxjs/toolkit';
 
const INITIAL_STATE = {
    data:{
        author: 'Guilherme Guatura',
        text: "Please click on \"new quote\"",
        color: '#000'
    }
}

//action
export const newQuoteAction = () => ({
    type: 'NEW_QUOTE'
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const quotes = [
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    },
    {
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
    },
    {
        text: "The goal is not to be better than the other man, but your previous self.",
        author: "Dalai Lama"
    },
    {
        text: "I do everything on my phone as a lot of people do.",
        author: "Mark Zuckerberg"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    }
]
const colors = ["#b71c1c", "#4a148c", "#0d47a1", "#006064", "#33691e", "#ff6f00", "#212121"]

//reducer
const genNewQuote = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "NEW_QUOTE":
            const quote = quotes[getRndInteger(0, quotes.length-1)]
            return {
                data:{
                    author: quote.author,
                    text: quote.text,
                    color: colors[getRndInteger(0, colors.length-1)]
                }
            }
        default: 
            return state;
    }
}

//store
const store = configureStore({ reducer: genNewQuote })
export default store;