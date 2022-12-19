import './Footer.scss';

export default function Footer (){

    return(
        <div>
            <nav className='footerNav'>
                <div className="footerNav__logo">
                    PageTwo
                </div>
                <div className='footerNav__listItems'>
                    <p className='footerNav__item'> Contact </p>
                    <a  href='mailto:skimsing@gmail.com'
                        className='footerNav__item'
                    >
                        skimsing@gmail.com
                    </a>
                </div>
            </nav>
            <div className='footerCopyright'>© Copyright Sophia Kim Sing 2022</div>
        </div>
    );
}