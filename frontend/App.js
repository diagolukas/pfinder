import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.js'; // A página de registro
import login from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={login} />
      </Switch>
    </Router>
  );
}

export default App;
