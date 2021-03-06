import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import moment from 'moment';

import '../styles/Item.scss';
import hnAPI from "../services/hnAPI";
import Loader from "./Loader";


function Item(props) {
    const itemID = props.itemID;
    const [item, setItem] = useState({});
    const [itemDomain, setItemDomain] = useState('');
    const [timeAgo, setTimeAgo] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        hnAPI.fetchItem(itemID).then((res) => {
            setItem(res);
            const siteName = res.url ? `(${new URL(res.url).host})` : '';
            setItemDomain(siteName);
            setTimeAgo(moment.unix(res.time).fromNow());
            setIsLoading(false);
        });
        return () => {
            console.debug('item did unmount')
        }  
    }, [itemID]);

    return(
        <>
        {
            (isLoading && <Loader/>) ||
            <div>
                <div className="item-laptop">
                    <p>
                        <a className="title" href={item.url}>
                            { item.title }
                        </a>
                        <span className="domain">{itemDomain}</span>
                    </p>
                    <div className="subtext-laptop">
                        {
                            item.type === 'story' && 
                                <span>
                                    {item.score} points by 
                                    <Link className="legend" to={`/user/${item.by}`}>{item.by}</Link>
                                </span>
                        }
                        <span className="legend">{timeAgo}</span>
                        {
                            item.type === 'story' && <span className="divider">|</span>
                        }                    
                        <Link to={`/item/${itemID}`}>
                            <span >
                                {item.descendants > 0 && item.descendants}
                                {
                                    (item.descendants === 0 && <span>discuss</span>) ||
                                    (item.descendants === 1 && <span> comment</span>) ||
                                    (item.descendants > 1 && <span> comments</span>)
                                }
                            </span>                        
                        </Link>
                    </div>
                </div>
            </div>
        }   
        </>    
    )
}

export default Item;