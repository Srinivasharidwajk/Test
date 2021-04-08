import React, {useReducer} from 'react';

interface IProps {}

// Action Types
export const GOOD_MORNING : string = 'GOOD_MORNING';
export const GOOD_AFTERNOON : string = 'GOOD_AFTERNOON';
export const GOOD_EVENING : string = 'GOOD_EVENING';

interface ActionType{
    type : string;
}

interface IState {
    message : string;
}

let initialState:IState = {
    message : 'Hello'
};

let reducer = (state = initialState , action:ActionType):IState => {
    switch(action.type) {
        case GOOD_MORNING:
            return {
                message : 'Good Morning'
            };
        case GOOD_AFTERNOON:
            return {
                message : 'Good Afternoon'
            };
        case GOOD_EVENING:
            return {
                message : 'Good Evening'
            };
        default : return state;
    }
};

let MessageTwo:React.FC<IProps> = () => {
    let [state , dispatch] = useReducer(reducer,initialState);

    let sayGoodMorning = () => {
        dispatch({type : GOOD_MORNING});
    };

    let sayGoodAfternoon = () => {
        dispatch({type : GOOD_AFTERNOON});
    };

    let sayGoodEvening = () => {
        dispatch({type : GOOD_EVENING});
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">useReducer() Hook</p>
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
export default MessageTwo;