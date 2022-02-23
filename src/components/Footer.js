import React from "react";
import '../styles/Footer.scss';

function Footer() {
    return(
        <div id="footer">
            <p>Show this project some ❤ on
                <a className="legend" href="https://github.com/maitta" target="_blank">GitHub</a>
            </p>
            <p>This is a react port of  
                <a className="legend" href="https://angular2-hn.firebaseapp.com/news/1" target="_blank">Angular HN</a>
            </p>
        </div>
    )
}

export default Footer;