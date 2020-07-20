import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,Link ,useLocation} from 'react-router-dom';
import {Environment} from './components/environment/index';
import Header from './Layouts/header';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <Header />
       <Switch>
        <Route exact path="/" component={Home} />
        
       
      </Switch>
    </div>
  );
}

export default App;
