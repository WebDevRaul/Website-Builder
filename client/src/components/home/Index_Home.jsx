import React from 'react';

import './indexHome.scss';
import Title from '../common/title/Title';

const IndexHome = () => (
  <div className='home'>
    <div className='row no-gutters'>
      <div className='col'>
        <Title title='Welcome' />
      </div>
    </div>
  </div>
);

export default IndexHome;