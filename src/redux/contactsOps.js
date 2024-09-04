import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66d81cb737b1cadd8053642f.mockapi.io/api/Ruslan_Zotsenko/contact";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("https://66d81cb737b1cadd8053642f.mockapi.io/api/Ruslan_Zotsenko/contact");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("https://66d81cb737b1cadd8053642f.mockapi.io/api/Ruslan_Zotsenko/contact", contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        console.log(`Delete contact ID: ${contactId}`);
        const response = await axios.delete(`https://66d81cb737b1cadd8053642f.mockapi.io/api/Ruslan_Zotsenko/contact/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})


