import './Header.scss';
import { Link } from 'react-router-dom';


export default function Header(){

    return(
        <div>
            <nav className='headerNav'>
                <div className="headerNav__logo">
                    PageTwo
                </div>
                <ul className='headerNav__listItems'>
                    <li className='headerNav__item'>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link to={"/Game"}>
                            Game
                        </Link>
                    </li>
                    <li className='headerNav__item'>
                        <Link to={'/About'}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}