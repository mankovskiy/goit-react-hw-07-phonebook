import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { selectContacts, selectFilter, selectError } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filterValue = filter.toLowerCase().trim();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return error ? (
    <b>no network</b>
  ) : (
    <>
      {contacts.length === 0 && (
        <p>
          <b>Contact list is empty</b>
        </p>
      )}
      <ul>
        {filterContacts.map(({ id, name, phone }) => {
          return (
            <List key={id}>
              <ContactListItem id={id} name={name} number={phone} />
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
