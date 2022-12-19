import './Scene.scss';
import { Card, Button } from 'react-bootstrap';
import ScoreModal from '../ScoreModal/ScoreModal';
import { useState, useEffect, useRef } from 'react';

//story
import story from '../../assets/story.json';

export default function Scene(){
    const [scene, setScene] = useState(story[7]);
    const [score, setScore] = useState(0);
    const [background, setBackground] = useState(`/images/${scene.image}`)
    const [showStartBtn, setShowStartBtn] = useState(true);
    const [isModalShowing,  setIsModalShowing] = useState(false);


   function keepScore(points){
      let currentScore = score + points;
      setScore(currentScore);
   } 

//display score modal

   function goToNextScene(choicePts){
        console.log(`choice points`, choicePts)
        const nextSceneNum = scene.sceneNum + 1;
        const nextScene =  story.find((next)=>{return next.sceneNum === nextSceneNum});
        
        // check if story is "over"
        if (nextScene.type !== "STORY") {
            const playScore = score + choicePts;
            getEndings(playScore);

            // showPopup();
            setTimeout(() => {
                setIsModalShowing(true);
                setShowStartBtn(true);
            }, 3000);
        } 
        // if not go to next scene
        else {
            setScene(nextScene)
        }
        //update score
        keepScore(choicePts);
   }

        //after input scores, reset animation sequence
   
    function startGame(){
        //play start animation
        //set scenes and reset score
        setScene(story[0]);
        setScore(0);
        setShowStartBtn(false)
    }

   function showOptions(sceneObj){
        if (sceneObj.choices) {
            return sceneObj.choices.map(element => {
                return (
                    <div 
                    className="storyOptions_option"
                    key={element.id}>
                        <Button 
                        className='storyOptions_text'
                        type='text'
                        onClick={() => goToNextScene(element.points)}
                        >
                            {element.option}
                        </Button>
                    </div>
                );
            });
            
        } else {
            return(
                <></>
            );
        }
   }

   function getEndings(score){
        console.log(score)
        if(score <= 3){
            const ending = story.find((scene) => scene.type === "BAD");
            console.log(ending);
            setScene(ending);
        }
        else if(score >= 4 && score <= 6){
            const ending = story.find((scene) => scene.type === "NORMAL");
            console.log(ending);

            setScene(ending);
        }
        else{
            const ending = story.find((scene) => scene.type === "GOOD");
            setScene(ending);
        }
   }

    
    return(
        <div>
            <div className="scene">
                <img src={`/images/${scene.image}`}
                ></img>    
            </div>            
            <div className="sceneText">
                {scene.dialog}
            </div>
            <div className='storyOptions'>
                {showOptions(scene)}
            </div>
            <div className="storyControls">
               {showStartBtn && 
               <Button
                className='storyStartBtn'
                onClick={startGame}
                >
                    Start Game!
                </Button>
                }
            </div>
            {/* {isModalShowing && <div className='modal'>Some modal message</div> } */}
            {isModalShowing && <ScoreModal score={score} showModal={setIsModalShowing}/> }
        </div>
    );
}