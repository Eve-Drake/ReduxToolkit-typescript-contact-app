import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { User, EditUser } from '../UserInterface';

interface UserArray {
    contactArray : User[]
}

const initialState : UserArray = {
    contactArray : [
    {id: '0', name: 'John Smith', username: 'jSmith', email: 'J.S@Email.com', editState: false},
    {id: '2', name: 'Jane Doe', username: 'jDoe', email: 'J.D@AnotehrEmail.com', editState: false}
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
                const editState = false
                return {payload: {id, name, username, email, editState}}
            } 
        },
        deleteContact: (state, action : PayloadAction<string>)=>{
            state.contactArray = state.contactArray.filter(el => el.id !== action.payload)
        },
        startEdit: (state, action : PayloadAction<string>)=>{
            state.contactArray = state.contactArray.map((el)=>{
                if(el.id === action.payload){
                    return {...el, editState: !el.editState}
                }
                return el
            })
        },
        submitEdit : (state, action : PayloadAction<EditUser>)=>{
            state.contactArray = state.contactArray.map((el)=>{
                if(el.id === action.payload.id){
                    return {...el, 
                        name: action.payload.name, 
                        username: action.payload.username, 
                        email: action.payload.email,
                        editState: !el.editState
                    }
                } 
                return el
            })
        }
    }
})

export const {addNewContact, deleteContact, startEdit, submitEdit} = contactListSlice.actions
export default contactListSlice.reducer;