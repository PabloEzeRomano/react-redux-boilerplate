'use strict';

import React, {
  Component,
  StyleSheet
} from 'react';

import {Router, Link} from 'react-router';

class App extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
  }

  isActiveRoute (routePath) {
    if (this.props.location.pathname === routePath) {
      return 'active';
    } else {
      return '';
    }
  }

  render () {
    return (
      <div>
        <div className="container" style={styles.navigator}>
          <div className="row">
            <div className="col-xs-12">
              <h3>Hot React Redux Boilerplate</h3>
              <ul className="nav nav-tabs">
                <li className={this.isActiveRoute.bind(this, '/')()}>
                  <Link to="/">Home</Link>
                </li>
                <li className={this.isActiveRoute.bind(this, 'books')()}>
                  <Link to="books">Books</Link>
                </li>
                <li className={this.isActiveRoute.bind(this, 'ace')()}>
                  <Link to="ace">Ace</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

var styles = {
  navigator : {
    marginBottom : 12
  }
};

export default App;

