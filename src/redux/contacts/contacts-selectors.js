import { createSelector } from "@reduxjs/toolkit";

const getLoadingContact = state => state.contacts.loadingContact;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getTotalContactCount = createSelector (
    [getAllContacts],
    // const contacts = getAllContacts(state);
    (contacts)=>{
    return contacts.length;}
);
const getvisibleContacts = createSelector(
    [getAllContacts, getFilter],

    (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
    },    
);


export default {
     getLoadingContact,
    getFilter,
    getvisibleContacts,
    getTotalContactCount,
    getAllContacts,
}