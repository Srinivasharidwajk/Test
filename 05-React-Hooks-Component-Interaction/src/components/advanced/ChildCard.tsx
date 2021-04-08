import React, {useState} from 'react';

interface IProps {
    pText : string;
    sendData : (data:string) => void
}
interface IState {
    cText : string;
}

let ChildCard:React.FC<IProps> = ({pText , sendData}) => {
    let [state , setState] = useState<IState>({
        cText : ''
    });

    let updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            cText : event.target.value
        });
        sendData(event.target.value);
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Child Card</p>
                                </div>
                                <div className="card-body rgba-purple-light">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={state.cText}
                                                onChange={updateInput}
                                                type="text" className="form-control" placeholder="Child Text"/>
                                        </div>
                                        <small>{pText}</small>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ChildCard;