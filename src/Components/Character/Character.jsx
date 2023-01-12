import './Character.scss';
import character from '../../assets/character.png';
import {motion} from 'framer-motion';

export default function Character(){
    //onClick move by X amount
    //link X to size of background image size
    const moveSegment = {
        start: {},
        animate: {}
    }
    return(
        // <div className='character'>
        //     <img className= "spritesheet"
        //         src={character} 
        //         alt="character"
        //         />
        // </div>

        <div>
           <motion.div className="character">
                <motion.img className={`spritesheet`}
                    src={character} 
                    alt="character"
                />
           </motion.div>
            
            {/* <motion.div className='test'
                animate = {{x: 50, y: 50}}
                transition = {{type: 'tween',}}
            /> */}

          
        </div>
    )
}