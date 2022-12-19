import Scene from "../../Components/Scene/Scene";
import Leaderboard from "../../Components/Leaderboard/Leaderboard";

export default function Game(){
    return(
        <div>
            <div className="game">
            <Scene />
            </div>
            <div className="leaderboard">
            <Leaderboard />
            </div>
        </div>
    );
}