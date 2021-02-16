import React from 'react';
import Animal from './components/Animal';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <div>    
        <Provider store={ store }>
            <Animal />      
        </Provider>
      </div>
    );
  }
}

export default App;
