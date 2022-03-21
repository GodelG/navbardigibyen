
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/navBar';
import OmOss from './components/omOss';
import KontaktOss from './components/kontaktOss';
import React, { Component } from 'react';

class App extends Component {
  render () {
  return (
    <React.Fragment >
      <Navbar/>
 
      <main className="container">
          <Switch>
            <Route path="/kontaktOss" component={KontaktOss} />
            <Route path="/omOss" component={OmOss} />
          </Switch>
        </main>
    </React.Fragment>
  );
}
}

export default App;
