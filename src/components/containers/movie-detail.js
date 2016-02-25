'use strict';

import React, {Component} from 'react';

import {connect} from 'react-redux';
import {updateMovie, deleteMovie} from '../../actions/movies_actions';
import {bindActionCreators} from 'redux';

class MovieDetail extends Component {

  constructor (props) {
    super(props);

    this.state = {
      editMode : false
    }

  }

  onDeleteFormSubmit (event) {
    event.preventDefault();
    this.props.deleteMovie(this.props.selectedMovie.id);
  }

  onEditFormSubmit (event) {
    event.preventDefault();
    this.setState({
      editMode : true,
      editMovie : this.props.selectedMovie
    });
  }

  onCancelEdit (event) {
    event.preventDefault();
    this.setState({
      editMode : false,
      editMovie : null
    });
  }

  onUpdateFormSubmit (event) {
    event.preventDefault();
    this.props.updateMovie(this.state.editMovie);
  }

  onInputChange (event) {

    var editMovie = Object.assign({}, this.state.editMovie);

    editMovie[event.target.id] = event.target.value;

    this.setState({
      editMovie
    });

  }

  showMovieDetails () {

    if (this.props.selectedMovie) {

      if (this.state.editMode) {
        return (
          <form onSubmit={this.onUpdateFormSubmit.bind(this)} className="form-group-sm">
            <div className="form-group">
              <input id="title" onChange={this.onInputChange.bind(this)} value={this.state.editMovie.title} type="text" className="form-control" placeholder="Titulo" required/>
              <input id="director" onChange={this.onInputChange.bind(this)} value={this.state.editMovie.director} type="text" className="form-control" placeholder="Director"/>
              <input id="cast" onChange={this.onInputChange.bind(this)} value={this.state.editMovie.cast} type="text" className="form-control" placeholder="Reparto"/>
              <input id="duration" onChange={this.onInputChange.bind(this)} value={this.state.editMovie.duration} type="number" className="form-control" placeholder="Duracion"/>
              <input id="year" onChange={this.onInputChange.bind(this)} value={this.state.editMovie.year} type="number" className="form-control" placeholder="Año"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-sm btn-block">Guardar</button>
              <button type="button" onClick={this.onCancelEdit.bind(this)} className="btn btn-warning btn-sm btn-block">Cancelar</button>
            </div>
          </form>
        );
      } else {
        return (
          <div>
            <h4>Titulo: {this.props.selectedMovie.title}</h4>
            <h3>Director: {this.props.selectedMovie.director}</h3>
            <h4><small>Reparto: {this.props.selectedMovie.cast}</small></h4>
            <h4><small>Duracion: {this.props.selectedMovie.duration}</small></h4>
            <h4><small>Año: {this.props.selectedMovie.year}</small></h4>
            <div className="row">
              <form onSubmit={this.onEditFormSubmit.bind(this)} className="form-group-sm col-xs-6">
                <div className="clearfix">
                  <button type="submit" className="btn btn-info btn-sm"><span className="glyphicon glyphicon-edit"/></button>
                </div>
              </form>
              <form onSubmit={this.onDeleteFormSubmit.bind(this)} className="form-group-sm col-xs-6">
                <div className="clearfix">
                  <button type="submit" className="btn btn-danger btn-sm pull-right"><span className="glyphicon glyphicon-trash"/></button>
                </div>
              </form>
            </div>
          </div>
        );
      }

    } else {
      return (
        <h3>¡NO HAY NINGUN LIBRO SELECCIONADO!</h3>
      );
    }

  }

  render () {
    return (
      <div className="jumbotron">
        {this.showMovieDetails()}
      </div>
    );
  }
}

MovieDetail.propTypes = {
  selectedMovie : React.PropTypes.object
};

MovieDetail.defaultProps = {
  selectedMovie : null
};

function mapStateToProps (state) {
  return {
    selectedMovie : state.selectedMovie
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updateMovie : updateMovie,
    deleteMovie : deleteMovie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);