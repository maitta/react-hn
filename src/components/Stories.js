import React, {useState, useEffect}  from "react";

import { useParams, Link } from "react-router-dom";

import '../styles/Stories.scss';
import Item from '../components/Item';
import hnAPI, { StoryType } from "../services/hnAPI";
import pagination from "../services/pagination";

function Stories(props) {
    const type = props.type;
    const pageIdParam = useParams().pageId;
    const pageId = pagination.getPageId(pageIdParam);

    const [stories, setStories] = useState([]);

    useEffect(() => {
        hnAPI.fetchStories(type).then((res) => {
            setStories(res.slice((pageId -1)*pagination.maxStories, pagination.maxStories*pageId))
        });
    }, [pageId, type])

    const getMaxPages = () => {
        switch(type){
            case StoryType.new:
            case StoryType.best:
            case StoryType.top:
                return pagination.getMaxPages();
            case StoryType.ask:
                return pagination.getMaxPagesMedium();
            case StoryType.job:
            case StoryType.show:
                return pagination.getMaxPagesShort();
        }
    }


    return(
        <div className="main-content">            
            <ol start={pagination.getDisplayIndex(pageId)}>                
                {
                    stories.map((i) => 
                        <li className="post" key={i*3}>
                            <Item className="item-block" itemID={i}></Item>
                        </li>)
                }                
            </ol>
            <div className="nav">
                { 
                    pageId > 1 && <Link to={`/${type}/${pageId - 1}`} className="prev">‹ Prev</Link>
                }
                {
                    pageId < getMaxPages() && <Link to={`/${type}/${pageId + 1}` } className="more">More ›</Link>
                }
            </div>
        </div>
    );
}

export default Stories;