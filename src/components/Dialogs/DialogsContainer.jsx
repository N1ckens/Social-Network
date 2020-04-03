import React from 'react';
import {AddMessageCreator, UpdateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let onSendMessageClick = () => {
                store.dispatch(AddMessageCreator());
            };
            let onMessageChange = (text) => {
                store.dispatch(UpdateNewMessageTextCreator(text));
            };

            return <Dialogs dialogsPage={state.dialogsPage} updateNewMessageText={onMessageChange}
                            SendMessage={onSendMessageClick}/>
        }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;