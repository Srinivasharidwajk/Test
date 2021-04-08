import React from 'react';
import './App.css';
import Message from "./components/Message";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks</a>
            </nav>
            <Message name="Rajan" age={25}/>
            <Message name="John" age={45}/>

        </React.Fragment>
    );
};
export default App;
