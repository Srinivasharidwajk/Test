import React from 'react';
import './App.css';
import AuthUser from "./components/AuthUser";
import HobbySelector from "./components/HobbySelector";
import Employees from "./components/Employees";
import CustomerList from "./components/customers/CustomerList";
import CustomerCards from "./components/customers/CustomerCard";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks - Conditional - Looping</a>
            </nav>
           {/* <AuthUser/>*/}
          {/* <HobbySelector/>*/}
       {/*   <Employees/>*/}
     {/*  <CustomerList/>*/}
     <CustomerCards/>
        </React.Fragment>
    );
};
export default App;
