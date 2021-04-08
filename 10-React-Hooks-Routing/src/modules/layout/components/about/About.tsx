import React from 'react';

interface IProps {}
interface IState {}

let About:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">About Us</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis corporis delectus deserunt facere illo incidunt minima nam natus optio porro possimus qui quibusdam quod rem repellat, rerum tenetur voluptas!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    NAME : <span className="font-weight-bold text-success">React Routing</span>
                                </li>
                                <li className="list-group-item">
                                    Version : <span className="font-weight-bold text-success">1.0.2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default About;