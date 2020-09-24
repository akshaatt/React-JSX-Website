import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import about from './components/pages/about';
import event from './components/pages/event';
import procedure from './components/pages/procedure';
import year from './components/pages/year';
import Teamss from './components/pages/teamss';
import teamsss from './components/pages/teamsss';
import clear from './components/pages/clear';
function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    <Switch>
      <Route path='/'exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/team' component={Team} />
      <Route path='/teamss' component={Teamss} />
      <Route path='/teamsss' component={teamsss} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/about' component={about} />
      <Route path='/event' component={event} />
      <Route path='/procedure' component={procedure} />
      <Route path='/year' component={year} />
      <Route path='/clear' component={clear} />
    </Switch>
    
    </Router>
    
    </>
  );
}

export default App;
