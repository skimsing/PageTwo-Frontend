import './Header.scss';


export default function Header(){

    return(
        <div>
            <nav className='headerNav'>
                <div className="headerNav__logo">
                    LOGO
                </div>
                <ul className='headerNav__listItems'>
                    <li className='headerNav__item'>
                        Home
                    </li>
                    <li className='headerNav__item'>
                        Game
                    </li>
                    <li className='headerNav__item'>
                        About
                    </li>
                    <li className='headerNav__item'>
                        Log In
                    </li>
                </ul>
            </nav>
        </div>
    );
}