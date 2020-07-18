import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import { HashRouter, Route } from 'react-router-dom';
import Maths from './Menu/Subjects/Maths/Maths';
import Physics from './Menu/Subjects/Physics/Physics';
import History from './Menu/Subjects/History/History';
import Chemistry from './Menu/Subjects/Chemistry/Chemistry';

function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Menu />
        <Route exact path='/maths' component={Maths} />
        <Route exact path='/physics' component={Physics} />
        <Route exact path='/history' component={History} />
        <Route exact path='/chemistry' component={Chemistry} />
        <div className='text'>Test Route for GitHub Pages</div>
        </HashRouter>
    </div>
  );
}


export default App;
