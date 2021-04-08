import React from 'react';
import {IProfile} from "./github/models/IProfile";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

interface IProps {
    profile : IProfile
}
interface IState {}

let GithubProfile:React.FC<IProps> = ({profile}) => {
    return (
        <React.Fragment>
           <section className="container">
               <div className="row">
                   <div className="col-md-3">
                       <GithubProfileCard profile={profile}/>
                   </div>
                   <div className="col-md-9">
                       <GithubProfileDetails profile={profile}/>
                   </div>
               </div>
           </section>
        </React.Fragment>
    );
};
export default GithubProfile;