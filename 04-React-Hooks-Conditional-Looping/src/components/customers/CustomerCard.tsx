import React, {useState} from 'react';
import {ICustomer} from "./ICustomer";
import {CustomerStore} from "./CustomerStore";

interface IProps {}
interface IState {
    customers : ICustomer[]
}

let CustomerCards:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        customers : CustomerStore.customerList
    });
    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Customers Info</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dicta, dolor dolores eligendi, minus nam nobis odit possimus praesentium quaerat quidem quis quos tempore temporibus tenetur vel, veniam voluptatum!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            state.customers.map(customer => {
                                return (
                                    <div className="col-md-3" key={customer.login.uuid}>
                                        <div className="card mt-3">
                                            <img src={customer.picture.large} alt=""/>
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        {customer.name.first} {customer.name.last}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Age : {customer.dob.age}yrs
                                                    </li>
                                                    <li className="list-group-item">
                                                        {customer.email}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Location : {customer.location.city}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default CustomerCards;