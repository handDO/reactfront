import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends PureComponent {
  componentDidMount() {
    document.title = 'Page not found';
  }

  render() {
    return (
      <div className="notfound">404
          <Link to="/">Домой</Link>
      </div>
      );
  }
}