// import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Box } from './Box/Box';

export function App() {
  return (
    <Box textAlign="center">
      <Box p={20}>
        <Box as="h2">Phonebook</Box>

        <ContactForm />
      </Box>
      <Box p={20}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
}
