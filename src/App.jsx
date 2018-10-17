import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/App.css';
import Header from './containers/header';
import Search from './components/mainpage/search';
import Categories from './components/mainpage/categories';
import BestContractors from './components/mainpage/bestcontractors';
import Projects from './components/projects/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authformopen: false
    }
  }

  toogleAuthForm = (e) => {
    e.preventDefault();
    // (this.state.authformopen) ? document.querySelector('.loginform').attributeStyleMap.set('display', 'none') : document.querySelector('.loginform').attributeStyleMap.set('display', 'block');
    this.setState({
      authformopen: !this.state.authformopen
    });
  }

  closeAuthForm = () => {
    // (this.state.authformopen) ? document.querySelector('.loginform').attributeStyleMap.set('display', 'none') : document.querySelector('.loginform').attributeStyleMap.set('display', 'block');
    this.setState({
      authformopen: !this.state.authformopen
    });
  }

  appClickHandle = (e) => {
    let parent = e.target;
    while (parent.id !== 'root') {
      console.log(parent.className);
      if (parent.classList.contains('loginform')) {
        return false;
      }
      parent = parent.parentNode;
    }
    if (parent.id === 'root' && this.state.authformopen === true) {
      this.closeAuthForm();
      return false;
    }
  }

  render() {
    return (<div onClick={ this.appClickHandle }>
                <Switch>
                    <Route exact path="/" render={ props => <Fragment>
                                                                <Header/>
                                                                <Search/>
                                                                <Categories/>
                                                                <BestContractors/>
                                                            </Fragment> } />
                    <Route exact path="/projects" render={ props => <Fragment>
                                                                        <Header class="projectheader" />
                                                                        <Projects/>
                                                                    </Fragment> } />
                </Switch>
            </div>);
  }
}

export default App;