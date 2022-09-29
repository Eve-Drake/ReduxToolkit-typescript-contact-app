import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../UserInterface';

interface UserArray {
    contactArray : User[]
}

const initialState : UserArray = {
    contactArray : [
    {id: '0', name: 'John Smith', username: 'jSmith', email: 'J.S@Email.com'},
    {id: '2', name: 'Jane Doe', username: 'jDoe', email: 'J.D@AnotehrEmail.com'}
    ],
}

export const contactListSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        addNewContact : {
            reducer: (state, action: PayloadAction<User>) => {
                state.contactArray.push(action.payload)
            },
            prepare : (name: string, username: string, email: string) =>{
                const id = nanoid()
                return {payload: {id, name, username, email}}
            } 
        },
        deleteContact: (state, action : PayloadAction<string>)=>{
            state.contactArray = state.contactArray.filter(el => el.id !== action.payload)
        }
       
    },
})

export const {addNewContact, deleteContact} = contactListSlice.actions
export default contactListSlice.reducer;