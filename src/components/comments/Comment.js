import React, {useState} from "react";

import { Link } from "react-router-dom";

import "../../styles/Comment.scss";

function Comment(props) {
    const comment = props.comment;
    const [collapsed, setCollapsed] = useState(false);

    return(
        <>
            {
                !comment.deleted && 
                <>
                    <div className={'meta' + collapsed ? ' meta-collapse' : ''}>
                        <span className="collapse" onClick={() => {setCollapsed(!collapsed)}}>
                            [{collapsed ? '+' : '-'}]
                        </span>
                        <Link to={`/user/${comment.user}`} className="legend">{comment.user}</Link>
                        <span className="time legend">{comment.time_ago}</span>
                    </div>
                    <div className="comment-tree">
                        <div hidden={collapsed}>
                            <p className="comment-text" dangerouslySetInnerHTML={{__html: comment.content}}></p>
                            <ul className="subtree">
                                {
                                    comment.comments.map((reply) => 
                                        <li key={reply.id}>
                                            <Comment comment={reply}></Comment>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </> ||
                comment.deleted &&
                <div>
                    <div class="deleted-meta">
                        <span class="collapse">[deleted]</span> | Comment Deleted
                    </div>
                </div>
            }     
        </>   
    )
}

export default Comment;