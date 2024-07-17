import { useState, useEffect } from 'react';
import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';


const App = () => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem('saved-contacts')) ?? []
    );

    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts));
    }, [contacts]);

    const filterContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const addContact = newContact => {
        setContacts(prevContacts => {
            return [...prevContacts, newContact];
        });
    };

    const deleteContact = contactId => {
        setContacts(prevContact => {
            return prevContact.filter(contact => contact.id !== contactId);
        });
    };

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={filterContacts} onDelete={deleteContact} />
        </div>
    );
    
};


export default App;