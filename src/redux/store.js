import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Serega'},
                {id: 2, name: 'Alik'},
                {id: 3, name: 'Tusik'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Tushka'}
            ],
            messages: [
                {id: 1, message: 'Fuck this shit!'},
                {id: 2, message: 'Oh, maaan!'},
                {id: 3, message: 'Bullshit'}
            ],
            newMessageText: '',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Is anybody here?', likes: 13},
                {id: 2, message: 'Fuck you!', likes: 22}
            ],
            newPostText: '',
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Serega'},
                {id: 2, name: 'Alik'},
                {id: 3, name: 'Tusik'}
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);git status
    }
};

export default store;