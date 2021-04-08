import React, {useState} from 'react';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import {IContact} from "./models/IContact";

interface IProps {}
interface IState {
    selectedContact : IContact
}

let ContactApp:React.FC<IProps> = () => {
    let [contactState , setContactState] = useState<IState>({
        selectedContact : {} as IContact
    });

    let receiveContact = (contact : IContact):void => {
        setContactState({
            selectedContact : contact
        });
    };

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Contact App</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dicta, dolor dolores eligendi, minus nam nobis odit possimus praesentium quaerat quidem quis quos tempore temporibus tenetur vel, veniam voluptatum!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ContactList sendContact={receiveContact}/>
                        </div>
                        <div className="col-md-3">
                            {
                                Object.keys(contactState.selectedContact).length > 0 &&
                                    <ContactCard selectedContact={contactState.selectedContact}/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ContactApp;