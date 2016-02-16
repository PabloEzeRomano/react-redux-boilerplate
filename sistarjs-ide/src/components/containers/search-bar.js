'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {readBooks} from '../../actions/books_actions';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = {
      bookTitle : ''
    };

  }

  onSearchInputChange (event) {
    this.setState({
      bookTitle : event.target.value
    });
  }

  onSearchFormSubmit (event) {
    event.preventDefault();

    this.props.fetchBooks(this.state.bookTitle);

  }

  render () {
    return (
      <form onSubmit={this.onSearchFormSubmit.bind(this)} className="input-group">
        <input
          className="form-control"
          type="text"
          value={this.state.bookTitle}
          onChange={this.onSearchInputChange.bind(this)}
          placeholder="Search Book"/>
        <span className="input-group-btn">
          <button className="btn btn-primary"><span className="glyphicon glyphicon-search"/></button>
        </span>
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
    fetchBooks : readBooks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);