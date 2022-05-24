import React from 'react';
import './App.scss';
import './assets/fonts/Jura-VariableFont_wght.ttf';

import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Contact from './pages/contacts/contact.component';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Switch>
          <Route
            exact  
            path='/'
            component={About}
          />
          <Route 
            exact
            path='/about'
            component={About}
          />
          <Route 
            exact
            path='/portfolio'
            component={Portfolio}
          />
          <Route 
            exact
            path='/contact'
            component={Contact}
          />
        </Switch> 
      </div>
    </div>
  );
}

export default App;
