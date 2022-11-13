import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    handleAddContact: {
      reducer(state, action) {
        if (state.contacts.some(cont => cont.name === action.payload.name)) {
          alert('Contact alredy exist');
          return;
        }
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },

    handleDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { handleAddContact, handleDeleteContact, setFilterValue } =
  contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
