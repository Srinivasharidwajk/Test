import React, {useState} from 'react';

interface IProps {}
interface IState {
    message : string;
}

let MessageOne:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        message : 'Hello'
    });

    let sayGoodMorning = () => {
        setState({
            message : 'Good Morning'
        })
    };

    let sayGoodAfternoon = () => {
        setState({
            message : 'Good Afternoon'
        })
    };

    let sayGoodEvening = () => {
        setState({
            message : 'Good Evening'
        })
    };


    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">useState() Hook</p>
                                </div>
                                <div className="card-body">
                                    <p className="h3">{state.message}</p>
                                    <button onClick={sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={sayGoodAfternoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={sayGoodEvening} className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default MessageOne;