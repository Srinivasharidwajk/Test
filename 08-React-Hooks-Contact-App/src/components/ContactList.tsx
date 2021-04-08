import React, {useEffect, useState} from 'react';
import {IContact} from "./models/IContact";
import axios from 'axios';

interface IProps {
    sendContact : (contact:IContact) => void
}
interface IState {
    contacts : IContact[]
}

let ContactList:React.FC<IProps> = ({sendContact}) => {
    let [state , setState] = useState<IState>({
        contacts : [] as IContact[]
    });

    useEffect(() => {
        // componentDidMount
        let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/d8f0a59bd6c54cf62635ad27ee04748d/raw/2757b410fe931edd91560bb0e389989284802998/Contacts.03.15.2021json`;
        axios.get(dataURL).then((response) => {
            setState({
                contacts : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
        // componentWillUnmount
        return () => {
            setState({
                contacts : [] as IContact[]
            })
        }
    }, []);

    let clickContact = (contact : IContact) => {
        sendContact(contact);
    };

    return (
        <React.Fragment>

            <table className="table table-hover text-center table-striped">
                <thead className="bg-secondary text-white">
                <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.contacts.map(contact => {
                        return (
                            <tr key={contact.login.uuid} onClick={clickContact.bind(this, contact)}>
                                <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                <td>{contact.name.title}. {contact.name.first} {contact.name.last}</td>
                                <td>{contact.dob.age} yrs</td>
                                <td>{contact.email}</td>
                                <td>{contact.location.city}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </React.Fragment>
    );
};
export default ContactList;