import React from 'react';
import {AddPostCreator, UpdateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(AddPostCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(UpdateNewPostTextCreator(text));
    }
    return <MyPosts newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}/>
}
export default MyPostsContainer;