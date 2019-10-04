import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Reminder (props) {
    return (
        <div id='RCont'>
            <h1>New Reminder...</h1>
            <input id='newReminder' onChange={event => props.reminderHandler(event)} placeholder='add reminder...'></input>
            <button id='addReminder' onClick={props.addReminder}>Add Reminder</button>
        </div>
    )
}

export default Reminder;

// onChange={event => props.reminderHandler(event)}