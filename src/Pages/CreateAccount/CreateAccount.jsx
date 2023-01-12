import './CreateAccount.scss';
import { useState } from 'react';
import axios from 'axios';

export default function CreateAccount(){
    //CREATE ACCOUNT VARIABLES
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleNewAccount = async(data) => {
        try {
          data.preventDefault();
          const createNewUser = {
            name: name,
            username: username,
            password: password,
            email: email,
          }
  
            await axios.post(`http://localhost:8080/login/create`,createNewUser);
  
        } catch (error) {
          console.error("failed to create new user", error)
        }
      }; 
    
    return(
        <div>
            <form className='createAccount'
                onSubmit={handleNewAccount}
            >
                <input className='createAccount__name'
                    placeholder='enter your name...'
                    required
                ></input>
                <input className='createAccount__username'
                    placeholder='enter a username...'
                    required
                ></input>
                <input className='createAccount__email'
                    placeholder='enter your email...'
                    required
                ></input>
                <button className='createAccount__submitBtn'
                    type='submit'
                >Create your Account</button>
            </form>
        </div>
    )
}