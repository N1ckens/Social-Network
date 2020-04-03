import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/Profile'
                       render={() => (<Profile/>)}/>
                <Route path='/Dialogs'
                       render={() => (<DialogsContainer/>)}/>
            </div>
        </div>
    )
}

export default App;
