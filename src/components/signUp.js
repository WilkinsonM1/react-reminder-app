import React from 'react';


const SignUp = (props) => {
    return (
        <div>
            <h1>Register here:</h1>
            
                <input type='text' className='input-email-sign-up' placeholder='Email' onChange={event => props.emailHandler(event)}/>
                <input type='text' className='username' placeholder='Username' onChange={event => props.usernameHandler(event)}/>
                <button onClick={props.signedUpHandler}>Submit</button>
            
        </div>
    )
}




export default SignUp;

/*
<form className="sign-in-form" onSubmit={props.onSubmit}>
                    <input type='text' className='input-email-sign-in'
                            placeholder='Email'/>
                    <button onClick={props.signInHandler}>Submit</button>
                </form>
                */