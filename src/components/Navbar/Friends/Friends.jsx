import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return(
        <div>
            <h3>Friends</h3>
            <div className={s.friends}>
                <div>
                    <Friend/>
                </div>
                <div>
                    <Friend/>
                </div>
                <div>
                    <Friend/>
                </div>
            </div>
        </div>
    )
}

export default Friends;