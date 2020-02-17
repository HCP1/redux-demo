import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Increase from './containers/increase'
import Button from './containers/button'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Increase />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
