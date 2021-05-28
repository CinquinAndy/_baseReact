import React from "react";
import logo from '../../ressources/logo.svg';
import Nav from "../nav/nav";
import './home.css';

function home(){
    return(
        <header className="App-header bg-gray-900">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}
export default home;
