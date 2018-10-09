import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';
import Description from './components/description';

class App extends Component {
  render() {
    return (<div><div className="wrapper">
              <Header/>
            </div>
            <Description/></div>);
  }
}
export default App;