import React, { Fragment, PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../containers/Header';
import Projects from '../containers/Projects';
import Mainpage from '../components/mainpage/mainpage';

class App extends PureComponent {
  appClickHandle = (e) => {
    let parent = e.target;
    let stopClasses = ['loginform', 'login', 'menu__mobilebarbutton', 'menu__links'];
    let stopClass = stopClasses.find(val => parent.classList.contains(val) ? true : false);
    while (parent.id !== 'root') {
      if (stopClass) return false;
      parent = parent.parentNode;
    }
    this.props.closeAllDropMenu();
  }

  render() {
    return (<div onClick={ this.appClickHandle }>
                <Switch>
                    <Route exact path="/" render={ props => <Fragment>
                                                                <Header/>
                                                                <Mainpage/>
                                                            </Fragment> } />
                    <Route path="/projects" render={ props => <Fragment>
                                                                  <Header class="projectheader" />
                                                                  <Projects/>
                                                              </Fragment> } />
                </Switch>
            </div>);
  }
}

export default App;