import PropTypes from 'prop-types';
import React, { Component } from 'react'
import CarsContext from './CarsContext';

class CarsProvider extends Component {
  state = {
    cars: {
        red: false,
        blue: false,
        yellow: false,
      },
  }

  moveCar = (car, side) => this.setState({
    cars: { ...this.state.cars, [car]: side } });

  render() {
    const context = { ...this.state, moveCar: this.moveCar }

    const { children } = this.props;

    return (
      <CarsContext.Provider value={ context }>
        { children }
      </CarsContext.Provider>
    )
  }
}

CarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarsProvider;
