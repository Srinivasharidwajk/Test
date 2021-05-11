import React from 'react';
import {IProfile} from "./github/models/IProfile";
import * as githubReducer from '../redux/github/git-hub.reducer';
import {useSelector} from "react-redux";
import {ReduxState} from "./GithubProfileSearchApp";
interface IProps {

}
interface IState {}

let GithubProfileCard:React.FC<IProps> = ({}) => {
    // get data from Redux Store
    let githubState:githubReducer.GithubState=useSelector((state:ReduxState)=>{
        return state.github;
    })
    let {repos,profile,loading,error} =githubState
    return (
        <React.Fragment>
            {
                Object.keys(profile).length > 0 &&
                <div className="card">
                    <img src={profile.avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <p className="h3">{profile.name}</p>
                        <small>{profile.bio}</small>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};
export default GithubProfileCard;