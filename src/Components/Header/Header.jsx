import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header(props){
    const [user, setUser] = useState("Login")

    return(
        <div className='headerNav'>
            <nav className='headerNav__nav'>
                <div className="headerNav__logo">
                    PageTwo
                </div>
                <ul className='headerNav__listItems'>
                    <li className='headerNav__item'>
                        <Link className="headerNav__itemLink"
                            to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link className="headerNav__itemLink"
                            to={"/Game"}>
                            Game
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link className="headerNav__itemLink"
                            to={'/About'}>
                            About
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link className="headerNav__itemLink"
                            to={'/UserHome'}>
                            {user}
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link className='headerNav__item'
                            to={'/CreateAccount'}
                        >
                            create acc
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link className='headerNav__item'
                            to={'/Login'}
                        >
                            login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}