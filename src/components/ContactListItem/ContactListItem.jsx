import { DeleteBtn } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
// import { handleDeleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { WrapName } from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import { useState } from 'react';

export function ContactListItem({ id, name, number }) {
  const [isBtnSpiner, setIsBtnSpiner] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setIsBtnSpiner(true);
  };

  const btnSpiner = (
    <BeatLoader color="#787e7d" size={5} speedMultiplier={1} margin={3} />
  );

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const isVisibleDeletContact = useSelector(selectContacts);
  return (
    <>
      <WrapName>
        <p>name: {name} </p>
        <p>number: {number} </p>
      </WrapName>
      <DeleteBtn onClick={handleDeleteContact} disabled={isBtnSpiner}>
        {isBtnSpiner ? btnSpiner : 'Delete'}
      </DeleteBtn>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
