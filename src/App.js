import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { buyAction, sellAction, rando } from './store';

class App extends Component {

  componentDidMount() {
    setInterval(this.props.setRate, 10000)
  }

  render() {
    return (
      <div className="appLayout">
        <div>
          <p>DOUBLOONS: {this.props.bloons}</p>
          <button onClick={() => this.props.buy()}>Exchange for ARRRcoins</button>
        </div>
        <p>Exchange Rate: {this.props.exchangeRate}</p>
        <div>
          <p>ARRRcoins: {this.props.coins}</p>
          <button onClick={() => this.props.sell()}>Exchange for Doubloons</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchangeRate: state.exchangeRate,
    bloons: state.bloons,
    coins: state.coins,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buy: function () {
      dispatch(buyAction);
    },
    sell: function () {
      dispatch(sellAction);
    },
    setRate: function () {
      dispatch(rando);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
