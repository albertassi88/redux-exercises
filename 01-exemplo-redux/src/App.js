import React from 'react';
import { Provider } from 'react-redux'; 
import rootStore from './redux/store';
import Son from './components/son';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={ rootStore }>
          <Son />
        </Provider>        
      </div>
    );
  }
}

export default App;
