import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page not found</h1>
        <p>Dave's not here man</p>
        <Link to="/" className="button button--link">
          Head home
        </Link>
      </div>
    </div>
  );
};
