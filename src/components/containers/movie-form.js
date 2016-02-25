'use strict';

import React, {
  Component
} from 'react';

import {connect} from 'react-redux';
import {createMovie, updateMovie} from '../../actions/movies_actions';
import {bindActionCreators} from 'redux';

class MovieForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      movie : {
        title : '',
        director : '',
        cast : '',
        duration : 0,
        year : 0
      }
    }
  }

  onMovieFormSubmit (event) {
    event.preventDefault();

    if (!this.state.movie.title) {
      console.log('ERR!');
    }

    this.props.createMovie(this.state.movie);

    this.setState({
      movie : {
        title : '',
        director : '',
        cast : '',
        duration : 0,
        year : 0
      }
    });

  }

  onInputChange (event) {

    var movie = Object.assign({}, this.state.movie);

    movie[event.target.id] = event.target.value;

    this.setState({
      movie
    });

  }

  render () {
    return (
      <form onSubmit={this.onMovieFormSubmit.bind(this)} className="panel panel-primary form-group-sm">
        <div className="panel-heading">
          <h4>Nueva Pelicula</h4>
        </div>
        <div className="panel-body">
          <input id="title" onChange={this.onInputChange.bind(this)} value={this.state.movie.title} type="text" className="form-control" placeholder="Titulo" required/>
          <input id="director" onChange={this.onInputChange.bind(this)} value={this.state.movie.director} type="text" className="form-control" placeholder="Director"/>
          <input id="cast" onChange={this.onInputChange.bind(this)} value={this.state.movie.cast} type="text" className="form-control" placeholder="Reparto"/>
          <input id="duration" onChange={this.onInputChange.bind(this)} value={this.state.movie.duration} type="number" className="form-control" placeholder="Duracion"/>
          <input id="year" onChange={this.onInputChange.bind(this)} value={this.state.movie.year} type="number" className="form-control" placeholder="Año"/>
        </div>
        <div className="panel-footer">
          <div className="clearfix">
            <button className="btn btn-primary btn-sm pull-right">Finalizar</button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    createMovie : createMovie,
    updateMovie : updateMovie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);