import React from 'react';
import Particles from 'react-particles-js';
import { secondaryColor } from '../index.scss';

const options = {
  "particles": {
    "line_linked": { "color":`${secondaryColor}` },
    "number": { "value": 50 },
    "size": { "value": 5 }
  }
}

const Particle = () => (
  <Particles className='particles bg-primary' params={ options } />
)

export default Particle;