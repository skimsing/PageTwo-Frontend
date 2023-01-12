import './Game.scss';
import Scene from "../../Components/Scene/Scene";
import Leaderboard from "../../Components/Leaderboard/Leaderboard";
import DictionaryPopper from "../../Components/DictionaryPopper/DictionaryPopper";
import { useState } from 'react';

export default function Game(){
    
    return(
        <div>
            <Scene />
            {/* <DictionaryPopper /> */}
        </div>
    );
}