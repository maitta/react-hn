import React from "react";
import '../styles/Header.scss';

function Header(){
    return(        
        <header id="header">
            <a className="home-link" href="/">
                <img alt="reactjs logo" className="logo" src="https://i.imgur.com/J303pQ4.png"></img>
            </a>
            <div className="header-text">
                <div className="left">
                <h1 className="name">
                    <a href="/">reactjs HN</a>
                </h1>
                <span className="header-nav">
                    <a href="">new</a>
                    <span className="divider">
                    |
                    </span>
                    <a href="">show</a>
                    <span className="divider">
                    |
                    </span>
                    <a href="">ask</a>
                    <span className="divider">
                    |
                    </span>
                    <a href="">jobs</a>
                </span>
                </div>
                <div className="info">
                    <a href="https://angular2-hn.firebaseapp.com/news/1" target="_blank">TODO</a>
                </div>
            </div>
        </header>        
    )
}

export default Header;