import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import hnAPI from "../../services/hnAPI";
import CommentTree from "./CommentTree";
import "../../styles/ItemComments.scss";

function ItemComments(){
    const itemId = useParams().itemId;
    const [item, setItem] = useState({});
    const [comments, setComments] = useState([])

    useEffect(() => {
        hnAPI.fetchItemAlt(itemId).then((res) => {
            console.log('alt api returned : ' + JSON.stringify(res))
            setItem(res);
            setComments(res.comments);      
        })
    }, [setItem, setComments]);

    return(
        <>
            { (isNaN(itemId) && 'Invalid item') ||
                <div className="main-content">            
                    { item && 
                        <div className="item">
                            <div className="mobile item-header">
                                {/** Markup that shows only on mobile (to give the app a
                                responsive mobile feel). Same attributes as below,
                                nothing really new here (but refer to the source
                                file if you're interested) */}
                            </div>
                            <div className="laptop item-header " >
                                <p>
                                    <a className="title" href={item.url}>
                                        {item.title}
                                    </a>
                                    <span className="domain">
                                        {
                                            item.domain && (item.domain)
                                        }
                                    </span>
                                </p>
                                <div className="subtext">
                                    <span>{item.points} points by <Link to={`/user/${item.user}`}>{item.user}</Link></span>
                                    <span className="legend">{item.time_ago}
                                        <span> | <a>
                                                <span>
                                                    {item.comments_count}   
                                                    {
                                                        (item.comments_count === 1 && <span className="legend">comment</span>) ||
                                                        (item.comments_count !== 1 && <span className="legend">comments</span>)
                                                    }
                                                </span>
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <p className="subject" dangerouslySetInnerHTML={{__html: item.content}}></p>
                            <CommentTree commentTree={comments}></CommentTree>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default ItemComments;