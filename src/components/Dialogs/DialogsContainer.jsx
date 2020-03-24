import React from 'react';
import {AddMessageCreator, UpdateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onSendMessageClick = () => {
        props.store.dispatch(AddMessageCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(UpdateNewMessageTextCreator(text));
    }
    return <Dialogs dialogsPage={state.dialogsPage} updateNewMessageText={onMessageChange}
                    SendMessage={onSendMessageClick}/>
}

export default DialogsContainer;