import React from 'react';
import {IProfile} from "./github/models/IProfile";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import * as githubReducer from "../redux/github/git-hub.reducer";
import {useSelector} from "react-redux";
import {ReduxState} from "./GithubProfileSearchApp";

interface IProps {

}
interface IState {}

let GithubProfile:React.FC<IProps> = ({}) => {
    // get data from Redux Store
    let githubState:githubReducer.GithubState=useSelector((state:ReduxState)=>{
        return state.github;
    })
    let {repos,profile,loading,error} =githubState
    return (
        <React.Fragment>
           <section className="container">
               <div className="row">
                   <div className="col-md-3">
                       <GithubProfileCard />
                   </div>
                   <div className="col-md-9">
                       <GithubProfileDetails />
                   </div>
               </div>
           </section>
        </React.Fragment>
    );
};
export default GithubProfile;