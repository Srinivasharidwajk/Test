import React from 'react';
import './App.css';
import MessageOne from "./components/MessageOne";
import MessageTwo from "./components/MessageTwo";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks - useReducer</a>
           </nav>
           {/* <MessageOne/>*/}
           <MessageTwo/>
        </React.Fragment>
    );
};
export default App;
