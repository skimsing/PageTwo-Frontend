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
        axios.get('http://localhost:8080/comments')
        .then((res)=>{
            setAllComments(res.data)
        })
    },[]);

    const getAllComments = async() => {
        //update comments with updated data
        const res = await axios.get('http://localhost:8080/comments');
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
            await axios.post('http://localhost:8080/comments', userComment);
            getAllComments();
        } catch (error) {
            console.log("couldn't post comment error", error);
        }
    }

    // delete handler
    const deleteComment = async(commentId) => {
        // console.log("comment is here", comment)
        try {
            const res = await axios.delete(`http://localhost:8080/comments/${commentId}`);
            getAllComments();
        } catch (error) {
            console.log("couldn't delete comment", error);
        }
    }

    //create each comment
    function addNewComment(name, date, comment, id){
        return(
            <div className="comment__displayed" key={id}>
                <div className="comment__details">
                    <div className="comment__label">
                        <div className="comment__name">
                            {name}
                        </div>
                        <div className="comment__date">
                            {date}
                        </div>
                    </div>
                    <button 
                        className='comment__deleteBtn'
                        onClick={() => deleteComment(id)}
                        >
                        ❌
                    </button>
                </div>
                {/* <div className="comment__details"> */}
                    <div className="comment__text">
                        {comment}
                    </div>
                {/* </div> */}
            </div>
        );
    }

    return(
        <div>
            <form 
                className="addComment__form"
                onSubmit={e => postNewComment(e)} 
            >  
                <h3 className="addComment__formLabel" >
                    Leave a comment:
                </h3>
                <div className='addComment__formWrapper'>
                    <label className='addComment__nameLabel'
                        htmlFor='commentName'
                        >
                        Your Name:
                    </label>
                    <input
                        className="addComment__commentName" 
                        name="commentName" 
                        id="commentName" 
                        value={name}
                        placeholder="Enter your name"
                        required
                        onChange={ e => setName(e.target.value)}
                        >
                    </input>
                    <label className='addComment__boxLabel'
                        htmlFor='commentText'
                        >
                        Comment:
                    </label>
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
                       Submit
                    </button>
                </div>
            </form>

            <div className="displayComments">
                <h3 className='displayComments__sectionHeading'>
                    What Others Are Saying:
                </h3>
                {allComments && allComments.map((e)=>{
                    return addNewComment(e.name, e.date, e.comment, e.postId);
                })}
            </div>
        </div>
    );
}