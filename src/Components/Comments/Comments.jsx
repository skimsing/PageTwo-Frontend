import './Comments.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments(){
 const [name, setName] = useState("");
 const [comment, setComment] = useState("");
 const [allComments, setAllComments] = useState([]);

    // load comments from server
    useEffect(()=>{
        //get data from backend
        axios.get('http://localhost:8080/comment')
        .then((res)=>{
            setAllComments(res.data)
        })
    },[]);

    //post comments to server
    const postNewComment = async(newComment) => {
        try {
            newComment.preventDefault();
            let userComment = {
                "name": name,
                "comment": comment,
            }
            const res = await axios.put('http://localhost:8080/comments')
        } catch (error) {
            console.log("couldn't post comment error", error);
        }
    }

    // delete handler
    const deleteComment = async(comment) => {
        console.log(`http://localhost:8080/comments/${comment.target.value}`)
    }


    //create each comment
    function addNewComment(name, date, comment, id){
        return(
            <div className="comment__displayed" key={id}>
                <div className="comment__icon">
                    <button 
                        className='comment__delete'
                        onClick={deleteComment}
                    >
                        ❌
                    </button>
                </div>
                <div className="comment__details">
                    <div className="comment__label">
                        <div className="comment__name">
                            {name}
                        </div>
                        <div className="comment__date">
                            {date}
                        </div>
                    </div>
                    <div className="comment__text">
                        {comment}
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div>
            <form 
                className="addComment__form"
                onSubmit={e => e.preventDefault()} 
            >  
                <label 
                    className="addComment__commentLabel" 
                    htmlFor="commentText"
                >
                    Leave a comment:
                </label>
                <div className='addComment__commentWrapper'>
                    <input
                        className="addComment__commentName" 
                        name="commentName" 
                        id="commentName" 
                        placeholder="Enter your name"
                        required
                        onChange={ e => setName(e.target.value)}
                    ></input>
                    <textarea 
                        className="addComment__commentBox" 
                        name="commentText" 
                        id="commentText" 
                        placeholder="Add a new comment"
                        required
                        onChange={ e => setComment(e.target.value)}
                    ></textarea>
                    <button 
                        className="addComment__btn" 
                        type="submit" 
                        name="btn"
                    >
                        Comment
                    </button>
                </div>
            </form>

            <div className="displayComments">
                {allComments && allComments.map((e)=>{
                    return addNewComment(e.name, e.date, e.comment, e.id);
                })}
            </div>
        </div>
    );
}