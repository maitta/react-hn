import React, { useEffect, useState } from "react";
import '../styles/Item.scss';
import hnAPI from "../services/hnAPI";
import moment from 'moment';

function Item(props) {
    const itemID = props.itemID;
    const [item, setItem] = useState({});
    const [itemDomain, setItemDomain] = useState('');
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        hnAPI.fetchItem(itemID).then((res) => {
            setItem(res);
            setItemDomain(new URL(res.url).host);
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
                    <span className="domain">({itemDomain})</span>
                </p>
                <div className="subtext-laptop">
                    {
                        item.type === 'story' && 
                            <span>{item.score} points by <a href="">{item.by}</a></span>
                    }
                    <span className="legend">{timeAgo}</span>
                    <a className="legend" href="">
                        <span >
                            {item.descendants}
                            {
                                item.descendants === 0 && <span className="legend">discuss</span> ||
                                item.descendants === 1 && <span className="legend">comment</span> ||
                                item.descendants > 1 && <span className="legend">comments</span>
                            }
                        </span>                        
                    </a>
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