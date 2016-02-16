'use strict';

import React, {Component} from 'react';

import {connect} from 'react-redux';
import {updateBook, deleteBook} from '../../actions/books_actions';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {

  constructor (props) {
    super(props);

    this.state = {
      editMode : false
    }

  }

  onDeleteFormSubmit (event) {
    event.preventDefault();
    console.log('derp');
    this.props.deleteBook(this.props.selectedBook.id);
  }

  onEditFormSubmit (event) {
    event.preventDefault();
    this.setState({
      editMode : true,
      editBook : this.props.selectedBook
    });
  }

  onCancelEdit (event) {
    event.preventDefault();
    this.setState({
      editMode : false,
      editBook : null
    });
  }

  onUpdateFormSubmit (event) {
    event.preventDefault();
    console.log('derp');
    this.props.updateBook(this.state.editBook);
  }

  onInputChange (event) {

    var editBook = Object.assign({}, this.state.editBook);

    editBook[event.target.id] = event.target.value;

    this.setState({
      editBook
    });

  }

  showBookDetails () {

    if (this.props.selectedBook) {

      if (this.state.editMode) {
        return (
          <form onSubmit={this.onUpdateFormSubmit.bind(this)} className="form-group-sm">
            <div className="form-group">
              <input id="title" onChange={this.onInputChange.bind(this)} value={this.state.editBook.title} type="text" className="form-control" placeholder="Title" required/>
              <input id="author" onChange={this.onInputChange.bind(this)} value={this.state.editBook.author} type="text" className="form-control" placeholder="Author"/>
              <input id="pages" onChange={this.onInputChange.bind(this)} value={this.state.editBook.pages} type="number" className="form-control" placeholder="Pages"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-sm btn-block">Save</button>
              <button type="button" onClick={this.onCancelEdit.bind(this)} className="btn btn-warning btn-sm btn-block">Cancel</button>
            </div>
          </form>
        );
      } else {
        return (
          <div>
            <h3>Title: {this.props.selectedBook.title}</h3>
            <h4>Pages: {this.props.selectedBook.pages}</h4>
            <h4><small>Author: {this.props.selectedBook.author}</small></h4>
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
        <h3>NO SELECTED BOOK!</h3>
      );
    }

  }

  render () {
    return (
      <div className="jumbotron">
        {this.showBookDetails()}
      </div>
    );
  }
}

BookDetail.propTypes = {
  selectedBook : React.PropTypes.object
};

BookDetail.defaultProps = {
  selectedBook : null
};

function mapStateToProps (state) {
  return {
    selectedBook : state.selectedBook
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updateBook : updateBook,
    deleteBook : deleteBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);