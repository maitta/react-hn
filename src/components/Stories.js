import React, {useState, useEffect}  from "react";
import '../styles/Stories.scss';
import Item from '../components/Item';
import hnAPI from "../services/hnAPI";

function Stories() {
    const maxStories = 30;
    const [stories, setStories] = useState([]);

    useEffect(() => {
        hnAPI.fetchStories().then((res) => {
            setStories(res.slice(0, maxStories))
        });
    }, [setStories]);

    return(
        <div className="main-content">            
            <ol>                
                {
                    stories.map((i) => <li key={i} className="post">
                        <Item className="item-block" itemID={i}></Item>
                    </li>)
                }                
            </ol>
            <div className="nav">
                <a href="" className="prev">
                    ‹ Prev
                </a>
                <a href="" className="more">
                    More ›
                </a>
            </div>
        </div>
    );
}

export default Stories;