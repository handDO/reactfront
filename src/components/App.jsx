import React, { Fragment, PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../containers/Header';
import Projects from '../containers/Projects';
import Mainpage from '../components/mainpage/mainpage';

class App extends PureComponent {
  render() {
    return (<div>
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