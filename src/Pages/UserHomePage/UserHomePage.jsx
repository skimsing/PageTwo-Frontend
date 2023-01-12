import './UserHomePage.scss';
import axios from 'axios';
import { useState, useEffect} from 'react';
import displayDefinition from '../../Helpers/displayDefinition';

export default function UserHomePage({username, userId}){
    const [word, setWord] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    const [wordList, setWordList] = useState([]);

    //GET WORDS FROM SERVER
    useEffect(()=>{
        //get data from backend
        axios.get(`http://localhost:8080/words/${userId}`)
        .then((res)=>{
            const sorted = res.data.sort((a, b)=> b.word - a.word); 
            setWordList(sorted);
        })
        .catch()
    },[]);

    const fetchDefinition = async (searchTerm) => {
        try {
            if(searchTerm) {
                const dictionary = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
                const dictObj = dictionary.data;
            }
        } catch (error) {
            console.error("can't find the word, check for typos", error);
        }
    }

    function displayWordList(wordData){
        return wordData.map((element) => {
                <li className='wordList__item'>
                    {element} {fetchDefinition(element)}
                </li>
             })
     }

    return(
        <div>
            <div className='welcomeUser'>
                <h1>Welcome USERNAME</h1>
            </div>
            <div className='wordBank'>
                <h3>List of words the user has added to their Wordbank</h3>
                <ul className='wordList'>
                   {displayWordList(wordList)}
                </ul>
            </div>
            <div className='playedGames'>
                <p>record of played games</p>
                <ul>
                    <li>game played</li>
                    <li>score</li>
                    <li>date</li>
                </ul>
            </div>
        </div>
    )
}