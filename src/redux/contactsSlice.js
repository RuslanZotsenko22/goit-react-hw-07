import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import data from '../components/data/data.json';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: data,
    },
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(),
                        ...contact,
                    }
                };
            }
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;