import React, { Fragment, PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../containers/Header';
import Search from './mainpage/search';
import Categories from './mainpage/categories';
import BestContractors from './mainpage/bestcontractors';
import Projects from '../containers/Projects';

class App extends PureComponent {
  render() {
    return (<div>
                <Switch>
                    <Route exact path="/" render={ props => <Fragment>
                                                                <Header/>
                                                                <Search/>
                                                                <Categories/>
                                                                <BestContractors/>
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