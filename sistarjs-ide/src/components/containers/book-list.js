'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook, readBooks} from '../../actions/books_actions';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchBooks('');
  }

  renderList () {
    if (this.props.books.length > 0) {
      return this.props.books.map(book => {

        var bookIsActive;

        bookIsActive =
          (this.props.selectedBook) ?
            (this.props.selectedBook.id === book.id) ? ' active' : ''
            : '';

        var classes = 'list-group-item' + bookIsActive;

        return (
          <a key={book.id} onClick={() => {this.props.selectBook(book)}} className={classes}>
            {book.title}
          </a>
        );
      });
    } else {
      return (
        <a className="list-group-item">No Results!</a>
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

BookList.propTypes = {
  books : React.PropTypes.array
};

BookList.defaultProps = {
  books : []
};

function mapStateToProps (state) {
  return {
    books : state.books,
    selectedBook : state.selectedBook
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectBook : selectBook,
    fetchBooks : readBooks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);