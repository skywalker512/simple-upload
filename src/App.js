import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';

import Hero from '@/common/hero';

class App extends Component {
  render() {
    return (
      <Fragment>      
        <GlobalStyle />
        <Hero />
      </Fragment>
    );
  }
}

export default App;
