import React from 'react';
import './App.css';
import ContactList from "./components/ContactList";
import ContactApp from "./components/ContactApp";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks - Server with Axios</a>
            </nav>
            <ContactApp/>
        </React.Fragment>
    );
};
export default App;
