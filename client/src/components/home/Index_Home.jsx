import React from 'react';

import './indexHome.scss';
import Title from '../common/title/Title';
import Messages from './messages/Messages';

const IndexHome = () => (
  <div className='home'>
    <div className='row no-gutters'>
      <div className='col'>
        <Title title='Welcome' />
        <Messages />
      </div>
    </div>
  </div>
);

export default IndexHome;