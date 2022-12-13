import './Footer.scss';

export default function Footer (){

    return(
        <div>
            <nav className='footerNav'>
                <div className="footerNav__logo">
                    LOGO
                </div>
                <ul className='footerNav__listItems'>
                    <li className='footerNav__item'>
                        Home
                    </li>
                    <li className='footerNav__item'>
                        Game
                    </li>
                    <li className='footerNav__item'>
                        About
                    </li>
                </ul>
            </nav>

        </div>
    );
}