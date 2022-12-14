import './ScoreModal.scss';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

export default function ScoreModal({score}){
    const updateDbScores = async() => {
        try {
            let userScores = {
                "playId": "",
                "name": "",
                "score": `${score}`
            }
            axios.post()
        } catch (error) {
            console.error("post scores error", error);
        } 
      }

      function submitHandler(data){
        data.preventDefault();
      }

    return(
        <div className='overlay'>

            <div className="form">
                <form>
                    <input 
                    type="text" 
                    placeholder='Enter your name...'>
                    </input>
                    <button 
                    type='submit'
                    onClick={()=> submitHandler()}
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
}