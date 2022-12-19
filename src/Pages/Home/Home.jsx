import './Home.scss';
import Comments from '../../Components/Comments/Comments.jsx';
import { Carousel, Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <div className="hero">
                <Carousel fade>
                    <Carousel.Item>
                        <img 
                            className='hero__carouselImg'
                            src="/images/backgroundMain.png"
                            alt="Image 1"
                        />
                        <Carousel.Caption>
                            <p>Adventurous!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img 
                            className='hero__carouselImg'
                            src="/images/background6.png"
                            alt="Image 2"
                        />
                        <Carousel.Caption>
                            <p>Exciting!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='hero__carouselImg'
                            src="/images/background3.png"
                            alt="Image 3"
                        />
                        <Carousel.Caption>
                            <p>Fascinating!</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>
            <div className="aboutGame">
                <p>Proin consectetur, neque venenatis commodo sagittis, diam justo tincidunt urna, sit amet tincidunt metus justo sed sem. Cras ut dolor urna. Cras ac nunc sit amet mauris feugiat luctus a eget nisl. Sed rhoncus blandit justo vitae fringilla. Sed dapibus arcu sit amet urna malesuada, quis ullamcorper sem tristique. Praesent vel metus enim. Nunc vel lorem est.</p>
            <Link to={"/Game"}>
            <Button 
                type='button'
                >
                Go to game
            </Button>
            </Link>
            </div>
            <div className="commentSection">
              <Comments />
            </div>
        </div>
    );
}
