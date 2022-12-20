import './Leaderboard.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Leaderboard(){
    const [leaderData, setLeaderData] = useState([]);

    useEffect(()=>{
        //get data from backend
        axios.get('http://localhost:8080/game')
        .then((res)=>{
            const sorted = res.data.sort((a, b)=> b.score - a.score); 
            setLeaderData(sorted);
        })
        .catch()
    },[]);

    //create tables
    function createLeaderboardTable(scoreData){
       return scoreData.map((element, i) => {
            //show top 10 scores only
            let pos = 0;
            while(pos <= 10) {
                pos++
                return(
                    <tr key={element.id}>
                        <td className='leaderboard__playerPosition'>
                            {i + 1}
                            </td>
                        <td className='leaderboard__playerName'>
                            {element.name}
                            </td>
                        <td className='leaderboard__playerScore'>
                            {element.score}
                            </td>
                    </tr>
                )
            }
        });
    }

    return(
        <div className='leaderboard'>
            <table className='leaderboard__table'>
                <thead className='leaderboard__tableHead'>
                    <tr className='leaderboard__tableColumnTitle'>
                        <th className='leaderboard__position'>
                            #
                            </th>
                        <th className='leaderboard__name'>
                            Name
                            </th>
                        <th className='leaderboard__score'>
                            Score
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {leaderData && createLeaderboardTable(leaderData)}
                </tbody>
            </table>
        </div>
    );
}