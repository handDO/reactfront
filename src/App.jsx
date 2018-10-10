import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';
import Search from './components/mainpage/search';
import Categories from './components/mainpage/categories';
import BestContractors from './components/mainpage/bestcontractors';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authformopen: false
    }
  }

  toogleAuthForm = (e) => {
    e.preventDefault();
    (this.state.authformopen) ?
      document.querySelector('.loginform').attributeStyleMap.set('display', 'none')
      : document.querySelector('.loginform').attributeStyleMap.set('display', 'block');
    this.setState({
      authformopen: !this.state.authformopen
    });
  }

  appClickHandle = (e) => {
    let parent = e.target;
    while (parent.id !== 'root') {
      console.log(parent.className);
      if (parent.className === 'loginform') {
        return false;
      }
      parent = parent.parentNode;
    }
    if (parent.id === 'root' && this.state.authformopen === true) {
      this.toogleAuthForm(e);
      return false;
    }
  }

  render() {
    return (<div onClick={this.appClickHandle}>
              <div className="wrapper">
                <Header toogleAuthForm={this.toogleAuthForm}/>
              </div>
              <Search/>
              <Categories/>
              <BestContractors/>
            </div>);
  }
}
export default App;