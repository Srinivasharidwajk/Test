import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import {IEmployee} from "../models/IEmployee";
import axios from 'axios';

interface URLParams{
    employeeId : string;
}
interface IProps {}
interface IState {
    selectedEmployee : IEmployee
}

let EmployeeDetails:React.FC<IProps> = () => {
    let {employeeId} = useParams<URLParams>();

    let [employeeState , setEmployeeState] = useState<IState>({
        selectedEmployee : {} as IEmployee
    });

    useEffect(() => {
        let dataURL : string = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
        axios.get(dataURL).then((response) => {
            let employees:IEmployee[] = response.data;
            let theEmployee:IEmployee | undefined = employees.find(employee => {
                return employee.login.uuid === employeeId;
            });
            if(theEmployee){
                setEmployeeState({
                    selectedEmployee : theEmployee
                });
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [employeeId]);

    let {selectedEmployee} = employeeState;
    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Employee Details</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis corporis delectus deserunt facere illo incidunt minima nam natus optio porro possimus qui quibusdam quod rem repellat, rerum tenetur voluptas!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {
                    selectedEmployee !== undefined &&
                    Object.keys(selectedEmployee).length > 0 ?
                        <React.Fragment>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-header bg-primary text-white">
                                                <p className="h3">{selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                            </div>
                                            <div className="card-body rgba-blue-light">
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <img src={selectedEmployee.picture.large} className="img-fluid img-thumbnail" alt=""/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                AGE : {selectedEmployee.dob.age} yrs
                                                            </li>
                                                            <li className="list-group-item">
                                                                Phone : {selectedEmployee.phone}
                                                            </li>
                                                            <li className="list-group-item">
                                                                Email : {selectedEmployee.email}
                                                            </li>
                                                            <li className="list-group-item">
                                                                Location : {selectedEmployee.location.city}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <NavLink to="/employees" className="btn btn-primary btn-sm">Back</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment> : null
                }
            </section>
        </React.Fragment>
    );
};
export default EmployeeDetails;