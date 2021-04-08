import React, {useState} from 'react';

interface IProps {}
interface IState {
    msg : string;
}

let WishMessage:React.FC<IProps> = () => {
    let [messageState , setMessageState] = useState<IState>({
        msg : 'Hello'
    });

    let sayGoodMorning = () => {
        setMessageState({
            msg : 'Good Morning'
        })
    };

    let sayGoodAfternoon = (value:string) => {
        setMessageState({
            msg : value
        })
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <p className="h3">{messageState.msg}</p>
                                    <button onClick={sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={sayGoodAfternoon.bind(this, 'Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={() => {setMessageState({msg : 'Good Evening'})}} className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default WishMessage;