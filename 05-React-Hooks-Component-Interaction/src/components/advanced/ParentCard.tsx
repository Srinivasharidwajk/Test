import React, {useState} from 'react';
import ChildCard from "./ChildCard";

interface IProps {}
interface IState {
    pText : string;
    cText : string;
}

let ParentCard:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        pText : '',
        cText : ''
    });

    let receiveData = (data : string):void => {
        setState({
            ...state,
            cText : data
        });
    };

    let updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            pText : event.target.value
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
                                    <p className="h4">Parent Card</p>
                                </div>
                                <div className="card-body rgba-green-light">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={state.pText}
                                                onChange={updateInput}
                                                type="text" className="form-control" placeholder="Parent Text"/>
                                        </div>
                                        <small>{state.cText}</small>
                                    </form>
                                    <ChildCard pText={state.pText} sendData={receiveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ParentCard;