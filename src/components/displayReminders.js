import React from 'react';
/*
const Reminder = (props) => {
    return (
        <div>
            
        </div>
    )
}
*/

const DisplayReminders = (props) => {
return (
    <div>
        <ul>
            <h3 contentEditable={true}>
                {props.reminders}
            </h3>
            <button onClick={props.deleteHandler}></button>
            <hr/>
        </ul>
        
    </div>
)
}


export default DisplayReminders;