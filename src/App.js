import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.store.getState().friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile'
                           render={() => (<Profile store={props.store}/>)}/>
                    <Route path='/Dialogs'
                           render={() => (<DialogsContainer store={props.store}/>)}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
