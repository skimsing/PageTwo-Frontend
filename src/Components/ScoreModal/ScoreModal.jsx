import './ScoreModal.scss';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScoreModal({score, showModal}){
    const [playerName, setPlayerName] = useState("");
    const navigate = useNavigate();

    const updateDbScores = async(playInfo) => {
        try {
            playInfo.preventDefault();
            const userScores = {
                name: playerName,
                score: score
            }
            await axios.post('http://localhost:8080/game', userScores);
            //auto close modal after input
            showModal(false)

        } catch (error) {
            console.error("post scores error", error);
        } 
      }

    return(
        <div className='overlay' onClick={()=> {showModal(false)}}>
            <div className="formCard">
                <h3>Submit your Score?</h3>
                <form onSubmit={e => updateDbScores(e)}>
                    <p>Your Score: {score}</p>
                    <input 
                        type="text" 
                        placeholder='Enter your name...'
                        name="playerName"
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                        required
                    />
                    {/* </input> */}
                    <Button 
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
                <Button 
                    type ='button'
                    onClick={ () => {showModal(false)}}
                >
                    Close
                </Button>
                <Button
                    type ='button'
                    onClick={() => {navigate('/')}}
                >
                    Homepage
                </Button>
            </div>
        </div>
    );
}