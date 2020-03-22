import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.graycell.ru/picture/big/lodochnik.jpg'/>
            {props.message}
            <div>
                <span>{props.likes} like</span>
            </div>
        </div>
    )
}
export default Post;