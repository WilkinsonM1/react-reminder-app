import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Reminder (props) {
    return (
        <div id='RCont'>
            <h1>New Reminder...</h1>
            <input id='newReminder'  ></input>
            <button id='addReminder' onClick= {props.reminderHandler}>Add Reminder</button>
        </div>
    )
}

export default Reminder;

// onChange={event => props.reminderHandler(event)}