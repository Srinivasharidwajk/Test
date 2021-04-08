import React, {useEffect, useState} from 'react';
import {IEmployee} from "../models/IEmployee";
import axios from 'axios';
import {Link} from 'react-router-dom';

interface IProps {}
interface IState {
    employees : IEmployee[];
}

let EmployeeList:React.FC<IProps> = () => {
    let [employeeState , setEmployeeState] = useState<IState>({
        employees : [] as IEmployee[]
    });

    useEffect(() => {
        let dataURL : string = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
        axios.get(dataURL).then((response) => {
            setEmployeeState({
                employees : response.data
            })
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    let {employees} = employeeState;
    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">Employee List</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur ea explicabo laboriosam nisi non pariatur, possimus quaerat quas sequi. Aliquid aperiam illo ipsa ipsum, nisi repellat veniam. Laborum, omnis.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-success text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    employees.map(employee => {
                                        return (
                                            <tr key={employee.login.uuid}>
                                                <td>{employee.login.uuid.substr(employee.login.uuid.length - 5)}</td>
                                                <td>
                                                    <img src={employee.picture.large} alt="" width="50" height="50"/>
                                                </td>
                                                <td>
                                                    <Link to={`/employees/${employee.login.uuid}`} className="text-success font-weight-bold">{employee.name.title}. {employee.name.first} {employee.name.last}</Link>
                                                </td>
                                                <td>{employee.dob.age} yrs</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default EmployeeList;