import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilterValue,
} from './operations';
import { toast } from 'react-toastify';

const contactInitialState = {
  contacts: { items: [], isLoading: false, error: null },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      if (
        state.contacts.items.some(cont => cont.name === action.payload.name)
      ) {
        toast.warn('Contact alredy exist');
      } else {
        toast.info(`'Add new contact' ${action.payload.name}`);
      }
      state.contacts.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [setFilterValue.pending](state) {
      state.contacts.isLoading = true;
    },
    [setFilterValue.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.filter = action.payload;
    },
    [setFilterValue.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
