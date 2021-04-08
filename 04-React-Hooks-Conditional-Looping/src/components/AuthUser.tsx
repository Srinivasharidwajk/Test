import React, {useState} from 'react';

interface IProps {}
interface IState {
    isLoggedIn : boolean;
}

let AuthUser:React.FC<IProps> = () => {
    let [authState , setAuthState] = useState<IState>({
        isLoggedIn : false
    });

    let login = () => {
        setAuthState({
            isLoggedIn : true
        })
    };

    let logOut = () => {
        setAuthState({
            isLoggedIn : false
        })
    };

    return (
        <React.Fragment>
            <pre>{JSON.stringify(authState)}</pre>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        authState.isLoggedIn ?
                                            <button onClick={logOut} className="btn btn-warning btn-sm">LogOut</button> :
                                            <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                    }

                                    {
                                        authState.isLoggedIn ?
                                            <p className="h3">Welcome Naveen!</p> :
                                            <p className="h3">Welcome Guest User</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default AuthUser;