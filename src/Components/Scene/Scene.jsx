import './Scene.scss';
import { Card, Button } from 'react-bootstrap';

//story
import story from '../../assets/story.json';
import { useState, useEffect } from 'react';

export default function Scene(){
    const [scene, setScene] = useState(story[7]);
    const [score, setScore] = useState(0);
    const [background, setBackground] = useState(`/images/${scene.image}`)
    //    const loadImage = (currentSceneObj) => {
    //         const pic = `/images/${currentSceneObj.image}`;
    //         setBackground(pic);
    //    };

   function keepScore(points){
      let currentScore = score + points;
      setScore(currentScore);
    //   console.log(`current score is: ${currentScore}`);
   } 

//    useEffect(() => {
//     console.log(score, scene);
//    }, [score]);
   
   function goToNextScene(choicePts){
        console.log(`choice points`, choicePts)
        const nextSceneNum = scene.sceneNum + 1;
        const nextScene =  story.find((next)=>{return next.sceneNum === nextSceneNum});
        // console.log(nextScene)
        
        // check if story is "over"
        if (nextScene.type !== "STORY") {
            getEndings(score + choicePts);
        } 
        // if not go to next scene
        else {
            setScene(nextScene)
        }
        keepScore(choicePts);
   }
    //on click
    //go to next scene
    //load bg image
    //add points
    //check if at ending yet
        //if at end, display ending
        //after timed amount, display input scores modal
        //after input scores, reset animation sequence
   
    //start game
    function startGame(){
        //start timer
        //play start animation
        //set scenes and reset score
        setScene(story[0]);
        setScore(0);
    }
   function showOptions(sceneObj){
        if (sceneObj.choices) {
            return sceneObj.choices.map(element => {
                return (
                    <div 
                    className="storyOptions_option"
                    key={element.id}>
                        <button 
                        className='storyOptions_text'
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
        if(score <= 2){
            const ending = story.find((scene) => scene.type === "BAD");
            console.log(ending);
            setScene(ending);
        }
        else if(score >= 3 && score <= 6){
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
                <button
                className='storyStartBtn'
                onClick={startGame}
                >
                    Start Game!
                </button>
            </div>
        </div>
    );
}