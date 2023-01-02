import './Header.scss';
import { Link } from 'react-router-dom';


export default function Header(){

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
                            to={'/LoginHome'}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}