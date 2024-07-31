import { getContactDetails } from "../../utils/renderContacts";
import { Outlet, Link } from "react-router-dom";

 const  loader = () => {
    const contact =  getContactDetails();
    return contact
}

export {loader}