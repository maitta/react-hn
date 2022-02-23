import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import moment from 'moment';

import '../styles/Item.scss';
import hnAPI from "../services/hnAPI";


function Item(props) {
    const itemID = props.itemID;
    const [item, setItem] = useState({});
    const [itemDomain, setItemDomain] = useState('');
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        hnAPI.fetchItem(itemID).then((res) => {
            setItem(res);
            const siteName = res.url ? `(${new URL(res.url).host})` : '';
            setItemDomain(siteName);
            setTimeAgo(moment.unix(res.time).fromNow());
        })
    }, [setItem, setItemDomain, setTimeAgo]);

    return(
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
                    <span className="divider">|</span>
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
            <div className="item-mobile">
                {/* TODO Markup that shows only on mobile (to give the app a
                responsive mobile feel). Same attributes as above
                nothing really new here (but refer to the source
                file if you're interested) */}
            </div>
        </div>
    )
}

export default Item;