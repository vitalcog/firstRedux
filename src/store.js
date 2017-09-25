import { createStore } from 'redux';

export const buyAction = {
  type: 'PIRATEINVESTMENTS1',
}

export const sellAction = {
  type: 'PIRATEINVESTMENTS2',
}

export const rando = {
  type: 'RANDOM',
}

function reducer(state, action) {
  if (action.type === 'PIRATEINVESTMENTS1') {
    return {
      exchangeRate: state.exchangeRate,
      bloons: state.bloons - state.exchangeRate,
      coins: state.coins + 1,
    }
  } else if ( action.type === 'PIRATEINVESTMENTS2') {
    return {
      exchangeRate: state.exchangeRate,
      bloons: state.bloons + state.exchangeRate,
      coins: state.coins - 1,
    }
  } else if (action.type === 'RANDOM') {
    return {
      exchangeRate: Math.floor(Math.random() * (10 - 1)) + 1,
      bloons: state.bloons,
      coins: state.coins,
    }
  }
  return state;
}

export const store = createStore(reducer, {
  exchangeRate: Math.floor(Math.random() * (10 - 1)) + 1,
  bloons: 20,
  coins: 0,
})
