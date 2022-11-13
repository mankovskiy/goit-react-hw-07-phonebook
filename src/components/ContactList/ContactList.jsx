import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);

  const filter = useSelector(state => state.contacts.filter);

  const filterValue = filter.toLowerCase().trim();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      {contacts.length === 0 && (
        <p>
          <b>Contact list is empty</b>
        </p>
      )}
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <List key={id}>
              <ContactListItem id={id} name={name} number={number} />
            </List>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
