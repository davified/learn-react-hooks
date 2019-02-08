import React, { Component } from 'react';
import SimpleCounterExample from './SimpleCounterExample'
import FormExample from './FormExample'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello hooks</h1>
        <SimpleCounterExample />
        <FormExample />
      </div>
    );
  }
}

export default App;
