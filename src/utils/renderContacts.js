import { contacts } from '../data/contacts'
import { Link } from 'react-router-dom'
import { getQualifiedName } from './formatter/getFormattedContact'
import './styles/style.css'

const renderContactName = () => { // calld in Layout.js
    return contacts.map(
        contact => {
            const name = getQualifiedName(contact.firstName, contact.lastName)

            return (
                <Link
                    key={contact.image}
                    to={name}
                    className="list-group-item border-0 rounded br margin ta color " >
                    {name}
                </Link>

            )
        }
    )
}
const getContactDetails = (name) => {  // called in Details.js

    const contact = contacts.find(
        (contact) => {
            const selectedName = getQualifiedName(contact.firstName, contact.lastName)
            return selectedName === name
        }
    )
    if (contact) {
        return contact
    }

    throw new Error('Contact not found');
}
const matchedContact = (searchedName) => {  // called in Search.js
    const suggestedContact = []
    if (searchedName) {
        const name = searchedName.toLowerCase()
        contacts.forEach(contact => {
            const firstName = contact.firstName.toLowerCase();
            const lastName = contact.lastName.toLowerCase();
            const fullName = getQualifiedName(contact.firstName, contact.lastName).toLowerCase()
            if (firstName.includes(name) || lastName.includes(name) || fullName.includes(name)) {
                suggestedContact.push(contact)

            }



        });

    }
    console.log(suggestedContact.length);

    return suggestedContact
}


export { renderContactName, getContactDetails, matchedContact }