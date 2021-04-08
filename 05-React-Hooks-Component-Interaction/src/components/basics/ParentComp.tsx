import React, {useState} from 'react';
import ChildComp from "./ChildComp";

interface IProps {}
interface IState {
    pText : string;
    cText : string;
}

let ParentComp:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        pText : 'Hello Iam from Parent',
        cText : ''
    });

    let receiveData = (data:string):void => {
        setState({
            ...state,
            cText : data
        });
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body rgba-blue-light">
                                    <p className="h4">Parent Card</p>
                                    <small>FROM CHILD : {state.cText}</small>
                                    <ChildComp pText={state.pText} sendData={receiveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ParentComp;