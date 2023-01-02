import './Game.scss';
import Scene from "../../Components/Scene/Scene";
import Leaderboard from "../../Components/Leaderboard/Leaderboard";

export default function Game(){
    return(
        <div>
            <Scene />
            <Leaderboard />
        </div>
    );
}