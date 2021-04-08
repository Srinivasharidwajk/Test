import React, {useState} from 'react';

interface IProps {
    pText : string;
    sendData : (data:string) => void
}
interface IState {
    cText : string;
}

let ChildComp:React.FC<IProps> = ({pText, sendData}) => {
    let [state , setState] = useState<IState>({
        cText : 'Hello Iam from Child!'
    });

    let clickButton = () => {
        sendData(state.cText);
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body rgba-red-light">
                                    <p className="h4">Child Card</p>
                                    <small>FROM PARENT : {pText}</small><br/>
                                    <button onClick={clickButton} className="btn btn-success btn-sm">send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ChildComp;