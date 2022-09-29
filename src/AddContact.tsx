import {useState} from 'react'
import { addNewContact } from './state/contactListSlice'
import { useDispatch } from 'react-redux'

const AddContact = () => {
    const [name, setName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const dispatch = useDispatch()

    const sendUserToSlice = () =>{
        if(name && username && email){
            dispatch(addNewContact(name, username, email))
            setName('')
            setEmail('')
            setUsername('')
        }
        else{
            return
        }
    }

  return (
    <div>
        <form>
            <input 
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                placeholder='Username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                placeholder='Name'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </form>
        <button onClick={sendUserToSlice}>Add Contact</button>
    </div>
  )
}

export default AddContact