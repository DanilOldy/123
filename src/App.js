import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import React from 'react';
import './App.css';
import Dialogs from './components/Dialog/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' component={<Dialogs /> } />
            <Route path='/profile' component={<Profile /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )

}

export default App;