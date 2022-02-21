import React from "react";

import Comment from "./Comment";
import "../../styles/CommentTree.scss";

function CommentTree(props) {
    const commentTree = props.commentTree;

    return (
        <ul className="comment-list">
            {
                commentTree.map((comment) => 
                    <li key={comment.id}>
                        <Comment comment={comment}></Comment>
                    </li>)
            }  
        </ul>
    )
}

export default CommentTree;