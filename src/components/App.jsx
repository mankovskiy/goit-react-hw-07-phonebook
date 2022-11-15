import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

// import { Filter } from './Filter/Filter';

import { Box } from './Box/Box';

export function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign="center">
      <Box p={20}>
        <Box as="h2">Phonebook</Box>
        <ContactForm />
      </Box>
      <Box p={20}>
        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        {error && <b>{error}</b>}
        <ContactList />
      </Box>
    </Box>
  );
}
