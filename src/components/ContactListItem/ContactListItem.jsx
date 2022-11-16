import { DeleteBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';
import { WrapName } from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function ContactListItem({ id, name, number }) {
  const [isBtnSpiner, setIsBtnSpiner] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setIsBtnSpiner(true);
    toast.info(`'Delete contact: ${name} !'`);
  };

  const btnSpiner = (
    <BeatLoader color="#787e7d" size={5} speedMultiplier={1} margin={3} />
  );

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
