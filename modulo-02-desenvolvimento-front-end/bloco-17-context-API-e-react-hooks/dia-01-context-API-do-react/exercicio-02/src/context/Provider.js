import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarsTrafficContext from './CarsTrafficContext';

class Provider extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: {
      color: 'red',
    },
  }

  moveCar = (car, side) => this.setState({
    cars: { ...this.state.cars, [car]: side }});

  changeSignal = (color) => this.setState({
    signal: { ...this.state.signal, color } })

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <CarsTrafficContext.Provider value={ context }>
        { children }
      </CarsTrafficContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
