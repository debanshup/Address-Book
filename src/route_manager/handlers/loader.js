import { getContactDetails } from "../../utils/renderContacts";
import { Outlet, Link } from "react-router-dom";

 const  loader = () => {    // have not used yet
    const contact =  getContactDetails();
    return contact
}

export {loader}