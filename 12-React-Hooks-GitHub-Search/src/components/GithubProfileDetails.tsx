import React from 'react';
import {IProfile} from "./github/models/IProfile";
import * as githubReducer from "../redux/github/git-hub.reducer";
import {useSelector} from "react-redux";
import {ReduxState} from "./GithubProfileSearchApp";

interface IProps {

}
interface IState {}

let GithubProfileDetails:React.FC<IProps> = ({}) => {
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
                    <div className="card-header">
                        <span className="badge badge-success mx-2">{profile.followers} Followers</span>
                        <span className="badge badge-warning mx-2">{profile.public_repos} Repos</span>
                        <span className="badge badge-secondary mx-2">{profile.public_gists} Gists</span>
                        <span className="badge badge-danger mx-2">{profile.following} Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                NAME : <span className="font-weight-bold">{profile.name}</span>
                            </li>
                            <li className="list-group-item">
                                Location : <span>{profile.location}</span>
                            </li>
                            <li className="list-group-item">
                                Email : <span>{profile.email}</span>
                            </li>
                            <li className="list-group-item">
                                Company : <span>{profile.company}</span>
                            </li>
                            <li className="list-group-item">
                                Blog : <span>
                                <a href={profile.blog} target="_blank">Blog</a>
                            </span>
                            </li>
                            <li className="list-group-item">
                                Member Since : <span>{profile.created_at}</span>
                            </li>
                            <li className="list-group-item">
                                Profile URL : <span>
                                <a href={profile.html_url} target="_blank">{profile.html_url}</a>
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};
export default GithubProfileDetails;