'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMovie} from '../../actions/movies_actions';
import {bindActionCreators} from 'redux';

class MovieList extends Component {

  constructor (props) {
    super(props);
  }

  renderList () {
    if (this.props.movies.length > 0) {
      return this.props.movies.map(movie => {

        var movieIsActive;

        movieIsActive =
          (this.props.selectedMovie) ?
            (this.props.selectedMovie.id === movie.id) ? ' active' : ''
            : '';

        var classes = 'list-group-item' + movieIsActive;

        return (
          <a key={movie.id} onClick={() => {this.props.selectMovie(movie)}} className={classes}>
            {movie.title}
          </a>
        );
      });
    } else {
      return (
        <a className="list-group-item">¡No hubo resultados!</a>
      );
    }
  }

  render () {
    return (
      <div className="list-group">
        {this.renderList()}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies : React.PropTypes.array
};

MovieList.defaultProps = {
  movies : []
};

function mapStateToProps (state) {
  return {
    movies : state.movies,
    selectedMovie : state.selectedMovie
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectMovie : selectMovie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);