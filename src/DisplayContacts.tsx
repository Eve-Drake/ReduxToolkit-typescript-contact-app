import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact, startEdit } from './state/contactListSlice'
import { RootState } from './state/store'

const DisplayContacts = () => {
    const contactArray  = useSelector((state : RootState) => state.contactList.contactArray)
    const dispatch = useDispatch()
  return (
    <div>
        {contactArray.map((i)=>(
            <div key={i.id}>
                <p>{(!i.editState ? 'Not Editing' : 'Editing')}</p>
                <button onClick={()=>dispatch(deleteContact(i.id))}>Delete</button>
                <button onClick={()=>dispatch(startEdit(i.id))}>Edit</button>
            </div>
        ))}

    </div>
  )
}

export default DisplayContacts