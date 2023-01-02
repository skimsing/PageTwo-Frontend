import './LoginHomePage.scss';

export default function LoginHomePage(){
    return(
        <div>
            <div className='welcomeUser'>
                <h1>Welcome USERNAME</h1>
            </div>
            <div className='wordBank'>
                <p>list of words the user has added to their Wordbank</p>
                <ul>
                    <li>words</li>
                    <li>words</li>
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