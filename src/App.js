import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux'
import store from './store'

import Hero from '@/common/hero';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Hero />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
