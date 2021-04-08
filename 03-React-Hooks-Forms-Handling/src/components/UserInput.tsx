import React, {useState} from 'react';

interface IProps {}
interface IState {
    message : string;
}

let UserInput:React.FC<IProps> = () => {
    let [messageState , setMessageState] = useState<IState>({
        message : ''
    });

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setMessageState({
            message : event.target.value
        })
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Two way binding</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={messageState.message}
                                                onChange={updateInput}
                                                type="text"
                                                className="form-control"/>
                                        </div>
                                    </form>
                                    <p className="h4">{messageState.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default UserInput;