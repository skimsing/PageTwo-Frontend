import './Scene.scss';
import Character from '../Character/Character';
import ScoreModal from '../ScoreModal/ScoreModal';
import { useState, useEffect, useRef } from 'react';

//story
import story from '../../assets/story.json';

export default function Scene(){
    //story states
    const [scene, setScene] = useState(story[7]);
    const [score, setScore] = useState(0);
    const [showStartBtn, setShowStartBtn] = useState(true);
    const [isModalShowing,  setIsModalShowing] = useState(false);

    //animation states

    // keep track of player's score
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

            setTimeout(() => {
                setIsModalShowing(true);
                setShowStartBtn(true);
            }, 3000);
        } 
        else {
            // if not go to next scene
            setScene(nextScene)
        }
        //update score
        keepScore(choicePts);
   }

    function startGame(){
        //play start animation
        setScene(story[0]);
        setScore(0);
        setShowStartBtn(false)
    }

   function showOptions(sceneObj){
        if (sceneObj.choices) {
            return sceneObj.choices.map(element => {
                return (
                    <div className="storyOptions_option"
                    key={element.id}>
                        <button className='storyOptions_text'
                        type='text'
                        onClick={() => goToNextScene(element.points)}
                        >
                            {element.option}
                        </button>
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
        if(score <= 4){
            const ending = story.find((scene) => scene.type === "BAD");
            console.log(ending);
            setScene(ending);
        }
        else if(score >= 5 && score <= 6){
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
                <img className='scene__background' 
                    src={`/images/${scene.image}`}/>
                {/* <Character />     */}
            </div>            
            <div className="scene__text">
                {scene.dialog}
            </div>
            <div className='storyOptions'>
                {showOptions(scene)}
            </div>
            <div className="storyControls">
               {showStartBtn && 
               <button className='storyStartBtn'
                onClick={startGame}
                >
                    Start Game!
                </button>
                }
            </div>
            {isModalShowing && <ScoreModal score={score} showModal={setIsModalShowing}/> }
        </div>
    );
}