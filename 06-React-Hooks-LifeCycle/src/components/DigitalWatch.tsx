import React, {useEffect, useState} from 'react';

interface IProps {}
interface IState {
    currentTime : string;
}

let DigitalWatch:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        currentTime : new Date().toLocaleTimeString()
    });

    useEffect(() => {
        // component did Mount
        let interval = setInterval(() => {
            setState({
                currentTime : new Date().toLocaleTimeString()
            })
        }, 1000);
        return () => {
            // component will unmount
            clearInterval(interval);
        }
    }, []);

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Digital Watch</p>
                                </div>
                                <div className="card-body rgba-purple-light">
                                    <h5 className="display-3">{state.currentTime}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default DigitalWatch;