const Add_Post = 'ADD-POST';
const Update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Is anybody here?', likes: 13},
        {id: 2, message: 'Fuck you!', likes: 22},
        {id: 2, message: 'Ohh man!', likes: 999},
    ],
    newPostText: '',
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: 5, message: state.newPostText, likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case Update_New_Post_Text:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const AddPostCreator = () => ({type: Add_Post});
export const UpdateNewPostTextCreator = (text) => ({type: Update_New_Post_Text, newText: text});

export default ProfileReducer;