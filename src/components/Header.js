import React from "react";
import { useLocation } from "react-router-dom";

import '../styles/Header.scss';
import logo from '../react-hn.svg';
import { Link, Outlet } from "react-router-dom";

function Header(){
    const location = useLocation().pathname;
    const activeClass = (route) => { return location.includes(route) ? "active" : null }

    return(      
        <>  
            <header id="header">
                <img alt={logo} className="logo" src={logo}></img>
                <div className="header-text">
                    <div className="left">
                        <h1 className="name">
                            <Link to="/">reactjs HN</Link>
                        </h1>
                        <span className="header-nav">
                            <nav>
                                <Link className={activeClass("/new")} to="/new">new</Link>
                                <span className="divider">|</span>
                                <Link className={activeClass("/best")} to="/best">best</Link>
                                <span className="divider">|</span>
                                <Link className={activeClass("/show")} to="/show">show</Link>
                                <span className="divider">|</span>
                                <Link className={activeClass("/ask")} to="/ask">ask</Link>
                                <span className="divider">|</span>
                                <Link className={activeClass("/job")} to="/job">jobs</Link>
                            </nav>                    
                        </span>
                    </div>
                </div>
            </header>  
            <Outlet />
        </>     
    )
}

export default Header;