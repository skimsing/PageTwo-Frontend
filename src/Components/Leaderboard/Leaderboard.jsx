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
                        <td>{i + 1}</td>
                        <td>{element.name}</td>
                        <td>{element.score}</td>
                    </tr>
                )
            }
        });
    }

    return(
        <div>
            <table className='leaderboard'>
                <thead className='leaderboard__tableHeading'>
                    <tr className='leaderboard__tableSubheading'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderData && createLeaderboardTable(leaderData)}
                </tbody>
            </table>
        </div>
    );
}