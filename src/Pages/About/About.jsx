import './About.scss';
import { useState } from 'react';

export default function About(){
    const [commentorName, setCommentorName] = useState("");
    const [comment, setComment] = useState("");

    function submitHandler(e){
        e.preventDefault();
        console.log("someone sent a message")
    }

    return(
        <div>
            <div className="aboutMe">
                <h1>About PageTwo</h1>
                <div className="aboutMe__paragraph">
                    <h3>Why's it called "PageTwo"?</h3>
                    <p>When we begin to read a new novel, we tend to think we the started the journey page one. Although that may technically be true, we've often found that it's only on page two when you decide to really get cozy with your new found friend. Perhaps, you've even gone to grab a coffee and a cookie (or two!) to accompany you on the ride.</p>
                </div>
                <div className="aboutMe__paragraph">
                    <h3>What's PageTwo all about?</h3>
                    <p>It's a Choose Your Own Adventure game with a digital twist! PageTwo aims to help children foster a love for reading in a fun and interactive way. An immersive story experience allows kids enjoy to reading and consequences understand the text before considering their choices. In addition, in order to bolster learning, we've added an easy to use dictionary so you can easily look up a word whenever you want. No more excuses! Begin your adventure and increase your vocabulary today! </p>
                </div>

            </div>
            <div className="addComment__FormLabel">
                <h3>Please contact me, preferrably bringing cookies</h3>
                <form className="addComment__form"
                    onSubmit={submitHandler}
                    >
                    <label className="addComment__nameLabel">
                        Name
                        </label>
                    <input className="addComment__commentName"
                        type="text"
                        placeholder = "Enter your name"
                        value={commentorName}
                        onChange={(e)=>setCommentorName(e.target.value)}
                        required
                    ></input>
                    <label className="addComment__boxLabel"
                    >
                        Leave a message:
                    </label>
                    <textarea className="addComment__commentBox"
                        placeholder="leave your message"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                        required
                    ></textarea>
                    <button className="addComment__btn"
                        type="Submit"
                    >
                        Submit message
                    </button>
                </form>
            </div>
        </div>
    );
}