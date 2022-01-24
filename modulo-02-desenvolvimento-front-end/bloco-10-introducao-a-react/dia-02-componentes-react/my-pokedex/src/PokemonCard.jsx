import React from 'react';
import './PokemonCard.css';

class PokemonCard extends React.Component {
    render() {
        return (
            <div className='card-box'>
                <div className='info-card'>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.value} {this.props.measurementUnit}</p>
                </div>
                <div className='img-card'>
                    <img src={this.props.image} alt={this.props.alt} />
                </div>
            </div>
        );
    };
};

export default PokemonCard;