import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moment from 'moment';

import hnAPI from "../services/hnAPI";

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
            <div>
                <span>user:</span>
                <span>{user.id}</span>
            </div>
            <div>
                <span>created:</span>
                <span>{userCreated}</span>
            </div>
            <div>
                <span>karma:</span>
                <span>{user.karma}</span>
            </div>
            <div>
                <span>about:</span>
                <span dangerouslySetInnerHTML={{__html: user.about}} />
                <div>
                    <p onClick={() => setShowSubmissions(!showSubmissions)}>submissions & comments</p>
                    {
                        showSubmissions && 
                        <p>TBD please feel free to contribute in this project's github page.</p>
                    }
                </div>
            </div>
        </>
    )
}

export default User;