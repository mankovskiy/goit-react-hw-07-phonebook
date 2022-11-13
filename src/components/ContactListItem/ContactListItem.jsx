import { DeleteBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { handleDeleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { WrapName } from './ContactListItem.styled';
export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(handleDeleteContact(id));
  };
  return (
    <>
      <WrapName>
        <p>name: {name} </p>
        <p>number: {number} </p>
      </WrapName>
      <DeleteBtn onClick={deleteContact}>delete</DeleteBtn>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
