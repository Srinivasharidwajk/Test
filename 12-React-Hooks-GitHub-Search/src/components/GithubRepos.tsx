import React from 'react';
import {IRepository} from "./github/models/IRepository";
import * as githubReducer from "../redux/github/git-hub.reducer";
import {useSelector} from "react-redux";
import {ReduxState} from "./GithubProfileSearchApp";

interface IProps {
}
interface IState {}

let GithubRepos:React.FC<IProps> = ({}) => {
    // get data from Redux Store
    let githubState:githubReducer.GithubState=useSelector((state:ReduxState)=>{
        return state.github;
    })
    let {repos,loading} =githubState
    return (
        <React.Fragment>
            {
                Object.keys(repos).length > 0 &&
                <div className="card">
                    <div className="card-header">
                        <p className="h4">Your Repositories</p>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                repos.map(repo => {
                                    return(
                                        <li className="list-group-item" key={repo.git_url}>
                                            <div className="d-flex justify-content-between">
                                                    <span className="h5">
                                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                    </span>
                                                <span className="badge badge-success">{repo.stargazers_count} Stars </span>
                                                <span className="badge badge-warning">{repo.watchers_count} Watchers </span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            }
        </React.Fragment>
    );
};
export default GithubRepos;