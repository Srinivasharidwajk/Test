import React, {useEffect, useState} from 'react';
import {IProfile} from "./github/models/IProfile";
import {IRepository} from "./github/models/IRepository";
import {GithubCred} from "./github/cred/GithubCred";
import axios from 'axios';
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

interface IProps {}
interface IState {
    githubUsername : string;
}

let GithubProfileSearchApp:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        githubUsername : '',
    });

    let [repoState , setRepoState] = useState({
        repos : [] as IRepository[]
    });

    let [profileState , setProfileState] = useState({
        profile : {} as IProfile
    });

    let updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            githubUsername : event.target.value
        });
    };

    let submitSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // search for profile & Repos
        searchProfile(state.githubUsername);
        searchRepos(state.githubUsername);
    };

    let searchProfile = (githubUsername:string) => {
        let dataURL:string = `https://api.github.com/users/${githubUsername}?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`
        axios.get(dataURL).then((response) => {
            setProfileState({
                profile : response.data
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    let searchRepos = (githubUsername:string) => {
        let dataURL:string = `https://api.github.com/users/${githubUsername}/repos?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`
        axios.get(dataURL).then((response) => {
            setRepoState({
                repos : response.data
            })
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <React.Fragment>
           {/* <pre>{JSON.stringify(state)}</pre>*/}
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Github Profile Search</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore incidunt magni odit, quia sapiente velit vero voluptatibus. Ab aut, cupiditate distinctio dolorem eos fugit ipsum non similique tempora vitae.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={submitSearch} className="row g-2 align-items-center">
                            <div className="col-auto">
                                <input
                                    value={state.githubUsername}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="github Username"/>
                            </div>
                            <div className="col-auto">
                                <input type="submit" className="btn btn-success btn-sm" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(profileState.profile).length > 0 &&
                                <GithubProfile profile={profileState.profile}/>
                        }
                    </div>
                </div>
            </section>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            repoState.repos.length > 0 &&
                            <GithubRepos repos={repoState.repos}/>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default GithubProfileSearchApp;