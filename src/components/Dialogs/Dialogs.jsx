import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/message";
import DialogItem from './DialogItem/DialogItem';
import {AddMessageCreator, UpdateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);
    let onSendMessageClick = () => {
        props.dispatch(AddMessageCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(UpdateNewMessageTextCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                    <textarea placeholder='Enter your message' onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;