import './LoginModal.scss';
import { useState } from 'react';
import axios from 'axios';

export default function LoginModal(){

    const [show, setShow] = useState(false);

    //check if user exists
    //if yes go to user home page
    //if not, show error

   const submitHandler = async() =>{
        try {
            
        } catch (error) {
            console.error("cannot log in", error);
        }
    }

    return(
        <div className='overlay'>
            <div className='formCard'>
                <form className='formCard__loginForm'
                    onSubmit={submitHandler}
                >
                    <input className='formCard__username'
                        type="text" 
                        placeholder='enter username...'
                        required
                    />
                    <input className='formCard__password'
                        type="text"
                        placeholder='enter your password'
                        required
                    />
                    <button className='formCard__loginBtn'
                        type='submit'
                    >
                        Log In
                    </button>
                </form>
                <div className='exitBtns'>
                    <button
                    
                    >
                        Create Account
                    </button>
                    <button>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}