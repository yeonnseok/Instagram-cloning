import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";


const PhotoComments = props => (
    <div>
        <ul>
            <Comment username={props.creator} comment={props.caption}/>
            {props.comments.map(comment => (
                <Comment 
                    username={comment.creator.username}
                    comment={comment.message}
                    key={comment.id}
                />
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li>
        <span>{props.username}</span> <span>{props.comment}</span>
    </li>
)

PhotoComments.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }),
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }).isRequired,
        })
    ).isRequired,
}

export default PhotoComments;