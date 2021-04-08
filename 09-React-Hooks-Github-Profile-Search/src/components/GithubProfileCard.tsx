import React from 'react';
import {IProfile} from "./github/models/IProfile";

interface IProps {
    profile : IProfile
}
interface IState {}

let GithubProfileCard:React.FC<IProps> = ({profile}) => {
    return (
        <React.Fragment>
            <div className="card">
                <img src={profile.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h3">{profile.name}</p>
                    <small>{profile.bio}</small>
                </div>
            </div>
        </React.Fragment>
    );
};
export default GithubProfileCard;