import './Home.scss';
import Comments from '../../Components/Comments/Comments.jsx';
import { Carousel, Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <div className="hero">
                    {/* Carousel */}

            </div>
            <div className="aboutGame">
            <Button 
                type='button'
            ></Button>
            </div>
            <div className="commentSection">
              <Comments />
            </div>
        </div>
    );
}
