import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from './ContactForm.stuled';
import { AddBtn } from './ContactForm.stuled';
import { Input } from './ContactForm.stuled';
import { addContact } from 'redux/operations';

import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

import { ContactFormLabel } from './ContactForm.stuled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { value } = e.target;
    e.target.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactFormLabel>Name</ContactFormLabel>
      <Input
        onChange={handleChangeInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <ContactFormLabel>Number</ContactFormLabel>
      <Input
        onChange={handleChangeInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />
      <AddBtn type="submit" disabled={name === '' || (number === '' && true)}>
        add contact
      </AddBtn>
    </Form>
  );
}

ContactForm.propTypes = {
  handleChangeInput: PropTypes.func,
};
