import React, {useState} from 'react';

interface IEmployee {
    sno : string;
    name : string;
    age : number;
    designation : string;
}
interface IProps {}
interface IState {
    employees : IEmployee[]
}

let Employees:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        employees : [
            {
                sno : 'AA1021',
                name : 'Rajan',
                age  : 25,
                designation : 'Software Engineer'
            },
            {
                sno : 'AA1022',
                name : 'Mahesh',
                age  : 28,
                designation : 'Tech Lead'
            },
            {
                sno : 'AA1023',
                name : 'Wilson',
                age  : 45,
                designation : 'Project Manager'
            },
            {
                sno : 'AA1024',
                name : 'Laura',
                age  : 55,
                designation : 'Director'
            }
        ]
    });
    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                state.employees.map(employee => {
                                    return (
                                        <div key={employee.sno} className="card mt-3">
                                            <div className="card-body bg-info">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Employee ID :  {employee.sno}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Name :  {employee.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Age :  {employee.age}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Designation :  {employee.designation}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default Employees;