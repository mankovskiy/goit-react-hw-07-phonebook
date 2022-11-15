import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
        alert('Contact alredy exist');
        return;
      }
      state.contacts.items.push(action.payload);
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
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
  },
});

// export const { handleAddContact, handleDeleteContact, setFilterValue } =
//   contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
//    handleAddContact: reducer(state, action) {
// if (state.contacts.some(cont => cont.name === action.payload.name)) {
//   alert('Contact alredy exist');
//   return;
// }
// state.contacts.push(action.payload);
//     },
//     prepare({ name, number }) {
//       return {
//         payload: {
//           id: nanoid(),
//           name: name,
//           number: number,
//         },
//       };
//     },
//   },

//   handleDeleteContact(state, action) {
// state.contacts = state.contacts.filter(
//   contact => contact.id !== action.payload
// );
//   },
//   setFilterValue(state, action) {
//     state.filter = action.payload;
