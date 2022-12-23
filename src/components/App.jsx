import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import FormContacts from "./FormContacts/FormContacts";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import useLocalStorage from "hooks/useLocalStorage";

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');
  const [filterResult, setFilterResult] = useState([]);
  
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts(state => [contact, ...state]);
  };

const deleteContact = ContactId => {
    setContacts(state => state.filter(contact => contact.id !== ContactId),
    );
  };
  
  useEffect(() => {
    const normalizedFilter = filter.toLocaleLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter));
    setFilterResult(visibleContacts);
  }, [filter, contacts]);
    
    return (
    <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#010101',
      }}
    >
     <h1>Phoneboock</h1>
        <FormContacts onSubmit={addContact} listContacts={contacts} />
        <FilterContacts
          textTitel="Find contacts by name"
          filterData={filter}
          onChange={e => setFilter(e.currentTarget.value)}
        />
        <ContactList
          listContacts={filterResult}
          deleteContact={deleteContact}
        />
    </div>
  );
};
