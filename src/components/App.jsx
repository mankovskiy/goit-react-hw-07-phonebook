import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ToastContainer, toast } from 'react-toastify';

import { Filter } from './Filter/Filter';

import { Box } from './Box/Box';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign="center">
      <Box p={20}>
        <Box as="h2">Phonebook</Box>
        <ContactForm />
        {/* {isLoading && !error && <BeatLoader />} */}
      </Box>
      <Box p={20}>
        <h2>Contacts</h2>
        <Filter />
        {error && toast.warn(error)}
        <ContactList />
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}
