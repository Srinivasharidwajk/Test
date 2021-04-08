import React from 'react';
import './App.css';
import Employee from "./components/Employee";
import Counter from "./components/Counter";
import WishMessage from "./components/WishMessage";
import ProductItem from "./components/ProductItem";
import ShippingCart from "./components/ShoppingCart";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React - Hooks with State</a>
            </nav>
           {/* <Employee/>*/}
           {/*<Counter/>*/}
          {/* <WishMessage/>*/}
        {/*  <ProductItem/>*/}
        <ShippingCart/>
        </React.Fragment>
    );
};
export default App;
