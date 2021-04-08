import React from 'react';
import './App.css';
import GithubProfileDetails from "./components/GithubProfileDetails";
import GithubProfileSearchApp from "./components/GithubProfileSearchApp";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks - Github Profile Search</a>
            </nav>
            <GithubProfileSearchApp/>
        </React.Fragment>
    );
};
export default App;
