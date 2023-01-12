import './DictionaryPopper.scss';
import searchIcon from '../../assets/searchIcon.png'

//TOOLS
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import displayDefinition from '../../Helpers/displayDefinition.jsx'


export default function DictionaryPopper(){
    const [showModal, setShowModal]  = useState(false);
    const [showIcon, setShowIcon] = useState(true);
    const [word, setWord] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //GET DEFINITIONS
    const fetchDefinition = async (e) => {
        try {
            e.preventDefault();
            if(searchTerm) {
                const dictionary = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
                const dictObj = dictionary.data;
                setWord(dictObj);
            }
        } catch (error) {
            console.error("can't find the word, check for typos", error);
        }
    }

    // DISPLAY DEFINITION
    // function displayDefinition(wordObj){
    //     if(wordObj){
    //         return(wordObj.map(word => {
    //             return(word.meanings.map(e => {
    //                 // const test = {
    //                 //     speech: e.partOfSpeech,
    //                 //     deftn: [e.definitions.map(f => {
    //                 //         // return( 
    //                 //             console.log("definition",f.definition)
    //                 //         // )
    //                 //     })]
    //                 // }
    //                 return(
    //                     <div className='meanings'>
    //                         <p className='meanings__speech'>{e.partOfSpeech}</p>
    //                         <ul className='meanings__definitions'>
    //                             {e.definitions.map(f => {
    //                                 return( 
    //                                     <li className='meanings_defnItem'>{f.definition}</li>
    //                                 )
    //                             })}
    //                         </ul>
    //                     </div>
    //                     // console.log(test)
                        
    //                 )
    //             }))
    //         }))
    //     }else{
    //         return(<></>)
    //     }
    // }
            
    //ADD FAVOURITE WORD (IF LOGGED IN)
    function addWordToFavourites(){}

    return(
        <div className='overlay'>
            <div className='dictionary'>
                <motion.div className="dictionary__searchIcon"
                    onClick={()=> {(showModal ? setShowModal(false) : setShowModal(true))}}
                >
                    <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                    >
                        <motion.path
                            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            d="M130 610 c-19 -19 -20 -33 -20 -310 l0 -290 210 0 210 0 0 260 c0
                                253 -1 260 -20 260 -17 0 -20 7 -20 50 l0 50 -170 0 c-157 0 -172 -2 -190 -20z
                                m340 -40 l0 -40 -158 0 c-161 0 -182 5 -182 40 0 35 21 40 182 40 l158 0 0
                                -40z m-134 -60 l174 0 0 -240 0 -240 -190 0 -190 0 0 246 c0 220 2 246 16 240
                                9 -3 94 -6 190 -6z
                                M210 580 c0 -6 45 -10 115 -10 70 0 115 4 115 10 0 6 -45 10 -115 10
                                -70 0 -115 -4 -115 -10z
                                M180 550 c0 -6 35 -10 85 -10 50 0 85 4 85 10 0 6 -35 10 -85 10 -50
                                0 -85 -4 -85 -10z
                                M360 550 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0
                                -20 -4 -20 -10z
                                M150 300 l0 -110 170 0 170 0 0 110 0 110 -170 0 -170 0 0 -110z
                                m320 0 l0 -90 -150 0 -150 0 0 90 0 90 150 0 150 0 0 -90z
                                M200 300 c0 -33 4 -60 10 -60 6 0 10 11 10 25 0 18 5 25 20 25 15 0
                                20 -7 20 -25 0 -14 5 -25 10 -25 6 0 10 27 10 60 l0 60 -40 0 -40 0 0 -60z
                                m60 25 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20
                                -15z
                                M360 350 c0 -5 12 -10 26 -10 l26 0 -26 -44 c-14 -25 -26 -47 -26
                                -50 0 -3 18 -6 40 -6 22 0 40 5 40 10 0 6 -12 10 -26 10 l-26 0 26 44 c14 25
                                26 47 26 50 0 3 -18 6 -40 6 -22 0 -40 -4 -40 -10z
                                M290 300 c0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -13 10 -30 10 -16
                                0 -30 -4 -30 -10z"/>
                    </motion.svg>
                </motion.div>

                {showModal && <div className="dictionary__searchPopper">
                    <form onSubmit={(e) => {fetchDefinition(e)}}>
                        <input
                            type="text"
                            placeholder='look up a word...'
                            value={searchTerm}
                            onChange={(e) => {setSearchTerm(e.target.value)}}
                        >
                        </input>
                        <button className='dictionary__submitBtn'
                          type='submit'
                        >
                            <img className='dictionary__submitIcon' src={searchIcon} />
                        </button>
                    </form>
                    <div className='dictionary__allDefinitions'>
                        {/* {console.log("display word section", word)} */}
                        {displayDefinition(word)}
                    </div>
                </div>}
            </div>
        </div>
    )
}