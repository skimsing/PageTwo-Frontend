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
            //close modal after posting scores
            showModal(false)

        } catch (error) {
            console.error("post scores error", error);
        } 
      }

    return(
        <div className='overlay'>
            <div className="formCard">
                <h3>Submit your Score?</h3>
                <form 
                    onSubmit={e => updateDbScores(e)}
                    className='formCard__form'
                >
                    <p>Your Score: {score}</p>
                    <input 
                        className='formCard__input'
                        type="text" 
                        placeholder='Enter your name...'
                        name="playerName"
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                        required
                    />
                    <Button 
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
                <Button 
                    className='formCard__closeBtn'
                    type ='button'
                    onClick={ () => {showModal(false)}}
                >
                    Close
                </Button>
                <Button
                    className='formCard__homeBtn'
                    type ='button'
                    onClick={() => {navigate('/')}}
                >
                    Homepage
                </Button>
            </div>
        </div>
    );
}