import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moment from 'moment';

import hnAPI from "../services/hnAPI";
import "../styles/User.scss";

function User(){
    const userId = useParams().userId;
    const [user, setUser] = useState({});
    const [userCreated, setUserCreated] = useState('');
    const [showSubmissions, setShowSubmissions] = useState(false);

    useEffect(() => {
        hnAPI.fetchUser(userId).then((res) => {
            setUser(res);
            setUserCreated(moment.unix(res.created).format('MMMM DD, YYYY'));
        })
    });

    return(
        <>
            <div class="profile">                
                <h1>user</h1>
                <p className="detail">{user.id}</p>

                <h1>created</h1>
                <p className="detail">{userCreated}</p>

                <h1>karma</h1>
                <p className="detail">{user.karma}</p>

                <h1>about</h1>
                <p className="detail" dangerouslySetInnerHTML={{__html: user.about}} />
                <div>                                       
                    <div className="detail submissions" onClick={() => setShowSubmissions(!showSubmissions)}>
                        <span>
                            {
                                showSubmissions && '▼ ' ||
                                !showSubmissions && '▶ '
                            }
                        </span>
                        comments & submissions
                    </div>
                    {
                        showSubmissions && 
                        <div className="detail">
                            <p>TBD please feel free to contribute to this project.</p>
                        </div>
                    }                    
                </div>
            </div>
        </>
    )
}

export default User;