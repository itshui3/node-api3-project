import React from 'react';
import logo from './logo.svg';
import './App.scss';
//components
import Posts from './components/Posts'
import Users from './components/Users'
//router
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
