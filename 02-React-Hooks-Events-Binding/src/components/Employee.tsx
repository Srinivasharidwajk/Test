import React, {useState} from 'react';

interface IEmployee{
    name : string;
    age : number;
    designation : string;
}
interface IProps {}
interface IState {
    employees : IEmployee[]
}

let Employee:React.FC<IProps> = () => {
    let [employeeState , setEmployeeState] = useState<IState>({
        employees : [
            {
                name : 'Rahul',
                age : 25,
                designation : 'Software Engineer'
            },
            {
                name : 'John',
                age : 45,
                designation : 'Project Manager'
            }
        ]
    });

    let {employees} = employeeState;
    return (
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-info">
                    <ul className="list-group">
                        <li className="list-group-item">NAME : {employees[0].name}</li>
                        <li className="list-group-item">AGE : {employees[0].age}</li>
                        <li className="list-group-item">DESIGNATION : {employees[0].designation}</li>
                    </ul>
                </div>
            </div>
            <div className="card m-3">
                <div className="card-body bg-info">
                    <ul className="list-group">
                        <li className="list-group-item">NAME : {employees[1].name}</li>
                        <li className="list-group-item">AGE : {employees[1].age}</li>
                        <li className="list-group-item">DESIGNATION : {employees[1].designation}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Employee;