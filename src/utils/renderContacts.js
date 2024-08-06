import { contacts } from '../data/contacts'
import { Link } from 'react-router-dom'
import './styles/style.css'
const renderContactName = () => {
    return contacts.map(
        contact => {

            return (
                <Link
                    key={contact.img}
                    to={contact.name}
                    className="list-group-item border-0 rounded br margin ta color " >
                    {contact.name}
                </Link>

            )
        }
    )
}
const getContactDetails = (n) => {
    const contact = contacts.find(contact => contact.name === n)
    if (contact) {
        return {
            name: contact.name,
            img: contact.image,
            mobile: contact.mobile,
            address: contact.address,
            description: contact.description,
        };
    }

    throw new Error('Contact not found');
}
const matchedContact = (name) => {
    const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (contact) console.log(contact.name);
    return contact


}
export { renderContactName, getContactDetails, matchedContact }