import React from 'react';
import {AddPostCreator, UpdateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
    <StoreContext.Consumer>
        {
            (store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(AddPostCreator());
            };
            let onPostChange = (text) => {
                store.dispatch(UpdateNewPostTextCreator(text));
            };
            return <MyPosts newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            updateNewPostText={onPostChange}/>
        }
        }
    </StoreContext.Consumer>
    )
};
export default MyPostsContainer;