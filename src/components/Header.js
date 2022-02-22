import React from "react";
import '../styles/Header.scss';

import { Link, Outlet } from "react-router-dom";

function Header(){
    return(      
        <>  
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
                        <nav>
                            <Link to="/new">new</Link>
                            <span className="divider">|</span>
                            <Link to="/best">best</Link>
                            <span className="divider">|</span>
                            <Link to="/show">show</Link>
                            <span className="divider">|</span>
                            <Link to="/ask">ask</Link>
                            <span className="divider">|</span>
                            <Link to="/job">jobs</Link>
                        </nav>                    
                    </span>
                    </div>
                    <div className="info">
                        <a href="https://angular2-hn.firebaseapp.com/news/1" target="_blank">TODO</a>
                    </div>
                </div>
            </header>  
            <Outlet />
        </>     
    )
}

export default Header;