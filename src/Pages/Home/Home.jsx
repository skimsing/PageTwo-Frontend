import './Home.scss';
import Comments from '../../Components/Comments/Comments.jsx';
import { useNavigate, useParams,  Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home(){
    const navigate = useNavigate();
    const params = useParams();
    
    //CLICK HANDLE FUNCTIONS
    function goToGame(){
        navigate('/Game');
    }

    // ANIMATION CONSTATNS
    const welcomeText = {
        start: {opacity: 1},
        animate: {
            opacity: 1,
            transition:{
                duration: 3,
                delay: 2,
                staggerChildren: 0.1
            }
        }
    }
 const letters = {
    start: {opacity: 0, y: 10},
    animate: {
        opacity: 1,
        y:0
    }
 }
    const colourFadeIn ={
        start: {fill: "linear-gradient(128deg, rgba(58,175,180,1) 0%)"},
        animate: {
           fill: [
            "linear-gradient(128deg, rgba(65,88,208,1) 28%)", 
            "(linear-gradient(128deg, rgba(131,58,180,1) 55%)"
            ],
            transition: {
                ease: "easeInOut",
                duration: 1, 
                repeat: Infinity,
                repeatType: "loop",
            }
        },
    }

    const pathTest ={
        initial:{ pathLength: 0 },
        animate:{ pathLength: 1 },
        transition:{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
        }
    }
    return(
        <div>
            {/* <div className="hero">
                <img 
                    className='hero__carouselImg'
                    src="/images/backgroundMain.png"
                    alt="Image 1"
                />
            </div> */}
            <motion.div className='welcome'
                variants={welcomeText} 
                initial="start" 
                animate="animate">
                <h1>Welcome</h1>
            </motion.div>
            <motion.svg
              xmlns={`http://www.w3.org/2000/svg`}
              viewBox='0 0 500 500'
              className={`logo`}
              width="500pt" 
              height="500pt"
            //   variants={welcomeText}
            //   initial="start" animate="animate"
            >
                <defs>
                    <motion.linearGradient id='gradient' x1='0' y1='0' x2='1' y2='1'
                    // x1='-5.31%' y1='6.79%' x2='105.31%' y2='93.21%'
                    // variants={colourFadeIn}
                    // initial="start" animate="animate"
                    >
                        {/* <stop offset="0%" stopColor="rgba(58,175,180,1)"/>
                        <stop offset="28%" stopColor='rgba(65,88,208,1)'/>
                        <stop offset="55%" stopColor='rgba(131,58,180,1)'/>
                        <stop offset="78%" stopColor='rgba(200,80,192,1)'/>
                        <stop offset="100%" stopColor='rgba(255,204,112,1)'/> */}
                        <motion.stop
                            stopColor="#8400ff" //dark blue 2B00FF => purple
                            animate={{
                                stopColor: [
                                "#02cbff", //blue ribbon
                                "#FFF9DA",//yellow
                                "#E7FFF7", //light mint green
                                "#FFC6A8", //pastel orange
                                "#d34e85", //dark orange
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                                duration: 8
                            }}
                            offset="15%"
                        />
                        <motion.stop
                            stopColor="#02cbff" // 0055FF blue ribbon (replaced with purple)
                            animate={{
                                stopColor: [
                                "#02cbff",
                                "#FFF9DA", //yellow
                                "#FFC6A8",//pastel orange
                                "#d34e85", //dark orange
                                "8400ff" //purple
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                                duration: 8
                            }}
                            offset="40%"
                        />
                        <motion.stop
                            stopColor="#D4504C" //valencia - orange red
                            animate={{
                                stopColor: [
                                    "#FFF9DA", //pastel yellow
                                    "#E7FFF7", //light mint green
                                    "#02cbff", 
                                    "#8400ff", // purple
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                                duration: 8
                            }}
                            offset="65%"
                        />
                        <motion.stop
                            stopColor="#d34e85" //dark orange (coral)
                            animate={{
                                stopColor: [
                                    "#D4504C", //valencia -orange red
                                    "#8400ff",  //purple
                                    "#E7FFF7", //pastel mint green
                                    "#FFF9DA", //light pastel yellow
                                    "#FFC6A8",//pastel orange
                                    ]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                                duration: 8
                            }}
                            offset="90%"
                        />
                    </motion.linearGradient>
                </defs>

                {/* background shape */}
                <motion.path
                    transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    // variants={colourFadeIn}
                    // initial="start" animate="animate"
                    strokeWidth={4}
                    strokeDasharray="0 1"
                    fill= "url(#gradient)"
                    d="M1555 4305 c-209 -26 -480 -94 -745 -188 l-145 -51 -230 -5 c-215 -6
                    -233 -8 -273 -29 -62 -33 -118 -96 -142 -158 -20 -54 -20 -69 -20 -1453 0
                    -1599 -8 -1465 89 -1562 45 -45 70 -61 112 -73 42 -12 313 -26 1179 -61 l1125
                    -46 1110 45 c611 25 1126 49 1144 52 96 16 199 106 226 197 13 44 15 237 15
                    1448 0 1384 0 1399 -20 1453 -24 62 -80 125 -142 158 -40 21 -58 23 -273 28
                    l-230 6 -150 52 c-297 104 -578 170 -818 193 -279 27 -561 -35 -757 -167 -40
                    -27 -83 -55 -95 -63 -20 -13 -26 -11 -75 28 -76 60 -239 137 -351 165 -180 46
                    -335 55 -534 31z"
                />
                <motion.path
                    transform="translate(155,70) scale(0.100000,-0.100000)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    strokeWidth={4}
                    strokeDasharray="0 1"
                    fill="#fff"
                    
                    //background whitespace
                    d="m405 -166 c149 -23 323 -100 418 -186 l43 -38 -3 -1288 -3
                    -1287 -73 55 c-139 105 -303 167 -481 184 -260 24 -718 -54 -1159 -197 l-152
                    -50 2 1260 3 1261 100 39 c237 92 584 194 799 233 184 34 344 39 506 14z
                
                    m1405 11 c140 -13 327 -50 503 -100 143 -40 414 -131 517 -174 l60 -24 3
                    -1260 2 -1261 -87 30 c-263 90 -607 172 -848 204 -157 21 -388 21 -480 1 -146
                    -32 -269 -88 -385 -175 l-65 -49 -3 1286 -3 1287 43 38 c115 104 302 177 503
                    196 117 12 120 12 240 1z
               
                    m-2975 -1631 c0 -968 3 -1386 11 -1400 22 -43 48
                    -45 350 -31 156 7 518 14 804 15 564 2 607 -1 843 -58 l102 -25 103 25 c231
                    56 282 60 807 59 267 0 604 -6 750 -12 413 -19 400 -19 427 12 l23 27 0 1385
                    0 1384 68 0 c50 0 76 -5 100 -20 66 -41 62 51 60 -1474 -3 -1381 -3 -1385 -24
                    -1413 -45 -62 10 -57 -1202 -107 l-1113 -46 -1112 46 c-1223 50 -1159 44
                    -1204 113 l-23 34 0 1379 c0 1518 -4 1428 62 1468 24 15 50 20 101 20 l67 0 0
                    -1381z

                    m1576 -1119 c91 -23 223 -86 274 -131 l35 -31 -42 6 c-153 21 -275 27
                    -548 27 -317 0 -627 -7 -770 -17 -44 -3 -77 -3 -74 0 10 10 296 84 430 111
                    294 59 549 72 695 35z

                    m1657 -14 c143 -25 465 -103 517 -125 19 -8 7 -10 -55
                    -6 -365 21 -1055 22 -1225 1 -68 -8 -126 -14 -127 -12 -2 2 11 14 29 28 81 61
                    187 109 293 134 98 22 385 12 568 -20z"
                />
                
            
            </motion.svg>
            <motion.div classname="welcome"
                variants={welcomeText} 
                initial="start" 
                animate="animate"
            >
                <h1>to</h1>
                <h1>Page Two</h1>
            </motion.div>

            <div className="aboutGame">
                <h3>Your Adventure Awaits...</h3>
                <p>Welcome to PageTwo, an online Choose Your Own Adventure game where you get to be the protagonist of your own story.
                Where will your decisions lead you? Play and find out...</p>
            </div>
                <button className='playGameBtn'
                    type='button'
                    onClick={goToGame}
                    >
                    Go to game
                </button>
            <div className="commentSection">
              <Comments />
            </div>
        </div>
    );
}
