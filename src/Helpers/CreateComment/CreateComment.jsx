import formatDate from "../formatDate";

export default function CreateComment({commentData}){

    const {name, timestamp, comment} = commentData;

    return(
      <div className="comment__displayed">
        <div className="comment__icon"></div>
        <div className="comment__details">
            <div className="comment__label">
                <div className="comment__name">{name}</div>
                <div className="comment__date">{formatDate(timestamp)}</div>
            </div>
            <div className="comment__text">{comment}</div>
        </div>
    </div>
    );
}