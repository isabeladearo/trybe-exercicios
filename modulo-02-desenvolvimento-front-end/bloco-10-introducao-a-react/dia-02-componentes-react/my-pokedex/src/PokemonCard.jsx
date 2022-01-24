import React from 'react';
import './PokemonCard.css';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
    render() {

        const { itemInfo: { name, type, averageWeight: { value, measurementUnit }, image }} = this.props;

        return (
            <div className='card-box'>
                <div className='info-card'>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{value} {measurementUnit}</p>
                </div>
                <div className='img-card'>
                    <img src={image} alt='Pokemon'/>
                </div>
            </div>
        );
    };
};

PokemonCard.propTypes = {
    itemInfo: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
    
}

export default PokemonCard;