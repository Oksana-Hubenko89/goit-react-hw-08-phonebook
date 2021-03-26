import axios from "axios";
import actions from './contacts-actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} = actions;


const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
        
    } catch (error) {
        const { statusText, status, data } = error.response;
        const errorMsg = `${status} ${statusText} :${data.message}`;
        dispatch(fetchContactsError(error.message));
        return toast.error(errorMsg);
    }
};

const addContact = (name, number) => async dispatch => {
    
    const contact = {
        name,
        number       
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        // const { statusText, status, data } = error.response;
        // const errorMsg = `${status} ${statusText} :${data.message}`;
        dispatch(addContactError(error.message));
        //  return toast.error(errorMsg);
    }
   
};

const deleteContact = contactId => async dispatch => {

    dispatch(deleteContactRequest());

 try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
 } catch (error) {
    //  const { statusText, status, data } = error.response;
    // const errorMsg = `${status} ${statusText} :${data.message}`;
    dispatch(deleteContactError(error.message));
    // return toast.error(errorMsg)
    }

  
};

export default {
    fetchContacts,
    addContact,
    deleteContact
};