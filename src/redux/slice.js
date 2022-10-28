import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, removeContact } = contactSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

// export const contactsReducer = (state = contactsInitialState, action) => {
//   return state;
// };

// const filterInitialState = '';

// export const filterReducer = (state = filterInitialState, action) => {
//   return state;
// };
