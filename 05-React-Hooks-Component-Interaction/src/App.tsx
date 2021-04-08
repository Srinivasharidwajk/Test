import React from 'react';
import './App.css';
import ParentComp from "./components/basics/ParentComp";
import ParentCard from "./components/advanced/ParentCard";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks - Component Interaction</a>
            </nav>

           {/* <ParentComp/>*/}
         {/*  <ParentCard/>*/}
        </React.Fragment>
    );
};
export default App;
