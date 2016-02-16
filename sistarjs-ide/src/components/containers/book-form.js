'use strict';

import React, {
  Component
} from 'react';

import {connect} from 'react-redux';
import {createBook} from '../../actions/books_actions';
import {bindActionCreators} from 'redux';

class BookForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      book : {
        title : '',
        author : '',
        pages : 0
      }
    }
  }

  onBookFormSubmit (event) {
    event.preventDefault();

    if (!this.state.book.title) {
      console.log('ERR!');
    }

    this.props.createBook(this.state.book);

    this.setState({
      book : {
        title : '',
        author : '',
        pages : 0
      }
    });

  }

  onInputChange (event) {

    var book = Object.assign({}, this.state.book);

    book[event.target.id] = event.target.value;

    this.setState({
      book
    });

  }

  render () {
    return (
      <form onSubmit={this.onBookFormSubmit.bind(this)} className="panel panel-primary form-group-sm">
        <div className="panel-heading">
          <h4>New Book</h4>
        </div>
        <div className="panel-body">
          <input id="title" value={this.state.book.title} onChange={this.onInputChange.bind(this)} type="text" className="form-control" placeholder="Title" required/>
          <input id="author" value={this.state.book.author} onChange={this.onInputChange.bind(this)} type="text" className="form-control" placeholder="Author"/>
          <input id="pages" value={this.state.book.pages} onChange={this.onInputChange.bind(this)} type="number" className="form-control" placeholder="Pages"/>
        </div>
        <div className="panel-footer">
          <div className="clearfix">
            <button className="btn btn-primary btn-sm pull-right">Submit</button>
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
    createBook : createBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);