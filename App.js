import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Increase />
        <button onClick={}>增加</button>
      </div>
    </Provider>
  );
}

export default App;
