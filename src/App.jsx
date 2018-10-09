import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';
import Search from './components/mainpage/search';
import Categories from './components/mainpage/categories';


class App extends Component {
  render() {
    return (<div>
              <div className="wrapper">
                <Header/>
              </div>
              <Search/>
              <Categories/>
            </div>);
  }
}
export default App;