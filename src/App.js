import React from 'react';
import WelcomeFlow from './flows/WelcomeFlow'
import GlobalStyle from './content/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './views/Main'

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/welcome">
            <WelcomeFlow />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
