import React, {useState} from 'react';

interface IProps {}
interface IState {
    eating : boolean;
    coding : boolean;
    sleeping : boolean;
}

let HobbySelector:React.FC<IProps> = () => {
    let [hobbyState , setHobbyState] = useState<IState>({
        eating : false,
        coding : false,
        sleeping : false
    });

   let updateCheck = (event : React.ChangeEvent<HTMLInputElement>) => {
       setHobbyState({
            ...hobbyState,
            [event.target.name] : event.target.checked
        });
    };

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(this.state)}</pre>*/}
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h4">Hobby Selector</p>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form>
                                                <div className="form-check">
                                                    <input
                                                        name="eating"
                                                        onChange={updateCheck}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckDefault">
                                                        Eating
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        name="coding"
                                                        onChange={updateCheck}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckChecked"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckChecked">
                                                        Coding
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        name="sleeping"
                                                        onChange={updateCheck}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckChecked"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckChecked">
                                                        Sleeping
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            {
                                                hobbyState.eating &&
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white ">
                                                        <p className="h3">Eating</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                hobbyState.coding &&
                                                <div className="card mt-2 animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3">Coding</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                hobbyState.sleeping &&
                                                <div className="card mt-2 animated jello">
                                                    <div className="card-body bg-danger text-white">
                                                        <p className="h3">Sleeping</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default HobbySelector;