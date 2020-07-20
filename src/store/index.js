import { configureStore } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    quotes:[],
    data:{
        author: 'Guilherme Guatura',
        text: " Please click on \"Next quote\" ",
        color: '#000'
    }
}

//action
export const newQuoteAction = () => ({
    type: 'NEW_QUOTE'
})

export const getQuotesAction = (quotes) => ({
    type: 'GET_QUOTES',
    payload: quotes
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//reducer
const quotesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "NEW_QUOTE":
            const quote = state.quotes[getRndInteger(0, state.quotes.length-1)]
            return {
                ...state,
                data:{
                    author: quote?.author,
                    text: quote?.text,
                    color: `rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`
                }
            }
        case "GET_QUOTES":
            return{
                ...state,
                quotes: action.payload
            }
        default: 
            return state;
    }
}

//store
const store = configureStore({ reducer: quotesReducer })
export default store;