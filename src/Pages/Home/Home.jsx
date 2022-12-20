import './Home.scss';
import Comments from '../../Components/Comments/Comments.jsx';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <div className="hero">
                <img 
                    className='hero__carouselImg'
                    src="/images/backgroundMain.png"
                    alt="Image 1"
                />
            </div>
            <div className="aboutGame">
                <h3>Your Adventure Awaits...</h3>
                <p>Proin consectetur, neque venenatis commodo sagittis, diam justo tincidunt urna, sit amet tincidunt metus justo sed sem. Cras ut dolor urna. Cras ac nunc sit amet mauris feugiat luctus a eget nisl. Sed rhoncus blandit justo vitae fringilla. Sed dapibus arcu sit amet urna malesuada, quis ullamcorper sem tristique. Praesent vel metus enim. Nunc vel lorem est.</p>
            </div>
            <Link to={"/Game"}>
                <button className='playGameBtn'
                    type='button'
                    >
                    Go to game
                </button>
            </Link>
            <div className="commentSection">
              <Comments />
            </div>
        </div>
    );
}
