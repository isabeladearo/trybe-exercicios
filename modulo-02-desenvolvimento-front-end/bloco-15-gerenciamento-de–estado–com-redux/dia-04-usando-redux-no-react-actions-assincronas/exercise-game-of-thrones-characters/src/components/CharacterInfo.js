import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { characterReducer: { isLoading, character, error } } = this.props;

    if (!isLoading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (isLoading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

CharacterInfo.propTypes = {
  isLoading: propTypes.bool.isRequired,
  character: propTypes.arrayOf(propTypes.object),
  error: propTypes.string,
};

const mapStateToProps = (state) => ({
  characterReducer: state.characterReducer,
});

export default connect(mapStateToProps)(CharacterInfo);
