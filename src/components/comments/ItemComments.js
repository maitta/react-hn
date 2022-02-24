import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import hnAPI from "../../services/hnAPI";
import CommentTree from "./CommentTree";
import "../../styles/ItemComments.scss";
import Loader from "../Loader";

function ItemComments(){
    const itemId = useParams().itemId;
    const [item, setItem] = useState({});
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        hnAPI.fetchItemAlt(itemId).then((res) => {
            console.log('alt api returned : ' + JSON.stringify(res))
            setItem(res, setIsLoading(false));
            setComments(res.comments);      
        });
        return () => {
            console.debug('item comments did unmount');
        };
    }, [itemId]);

    return(
        <>
            { (isLoading && <Loader />) ||
              (isNaN(itemId) && 'Invalid item') ||
                <div className="main-content">            
                    { item && 
                        <div className="item">
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
                                        <span> | 
                                                <span>
                                                    {item.comments_count}   
                                                    {
                                                        (item.comments_count === 1 && <span className="legend">comment</span>) ||
                                                        (item.comments_count !== 1 && <span className="legend">comments</span>)
                                                    }
                                                </span>
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