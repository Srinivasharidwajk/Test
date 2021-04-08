import React from 'react';
import './App.css';
import DigitalWatch from "./components/DigitalWatch";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks - LifeCycle</a>
            </nav>
            <DigitalWatch/>
        </React.Fragment>
    );
};
export default App;
