import './Comments.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Comments(){
 const [name, setName] = useState("");
 const [comment, setComment] = useState("");
 const [allComments, setAllComments] = useState([]);
 const params = useParams();

    // load comments from server
    useEffect(()=>{
        //get data from backend
        axios.get('http://localhost:8080/comment')
        .then((res)=>{
            setAllComments(res.data)
        })
    },[]);

    const getAllComments = async() => {
        //update comments with updated data
        const res = await axios.get('http://localhost:8080/comment');
        setAllComments(res.data);
        
    }
    //post comments to server
    const postNewComment = async(newComment) => {
        try {
            newComment.preventDefault();
            let userComment = {
                name: name,
                comment: comment,
            }
            await axios.post('http://localhost:8080/comment', userComment);
            getAllComments();
        } catch (error) {
            console.log("couldn't post comment error", error);
        }
    }

    // delete handler
    const deleteComment = async(comment) => {
        // console.log("comment is here", comment)
        try {
            const res = await axios.delete(`http://localhost:8080/comment/${comment}`);
            getAllComments();
        } catch (error) {
            console.log("couldn't delete comment", error);
        }
    }

    //create each comment
    function addNewComment(name, date, comment, id){
        return(
            <div className="comment__displayed" key={id}>
                <div className="comment__icon">
                    <button 
                        className='comment__delete'
                        onClick={() => deleteComment(id)}
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
                onSubmit={e => postNewComment(e)} 
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
                        value={name}
                        placeholder="Enter your name"
                        required
                        onChange={ e => setName(e.target.value)}
                    ></input>
                    <textarea 
                        className="addComment__commentBox" 
                        name="commentText" 
                        id="commentText" 
                        value={comment}
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