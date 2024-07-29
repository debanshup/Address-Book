import { contacts } from '../data/contacts'
import { Link } from 'react-router-dom'

const renderContactName = () => {
    return contacts.map(
        contact => (
            <Link
                key={contact.name}
                to={contact.name}
                className="list-group-item bg-dark text-white" >
                {contact.name}
            </Link>

        )
    )
}
const getContactDetails = (n) => {
    const contact = contacts.find(contact => contact.name === n)
    if (contact) {
        return {
            img: contact.image,
            mobile: contact.mobile,
            address: contact.address,
            description: contact.description,
        };
    }
    return null;
}
export { renderContactName, getContactDetails }