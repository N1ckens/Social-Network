const Add_Message = 'ADD-MESSAGE';
const Update_New_Message_Text = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Message:
            let newMessage = {
                id: 4, message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case Update_New_Message_Text:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const AddMessageCreator = () => ({type: Add_Message});
export const UpdateNewMessageTextCreator = (text) => ({type: Update_New_Message_Text, newText: text});

export default DialogsReducer;