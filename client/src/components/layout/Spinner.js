import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '64px', margin: '30vh auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
