import React from 'react'

// the sign in component with display an input box where user types in her username and a submit button which
// will then go on to change the state inside out app class compponent to show she has signed in and show the list of reminders and AddReminder component
// there will also be a "forgot your username?" which the user can click on which display a different from where user inputs her email instead.
const SignIn  = ( props ) => {

    if(props.forgotUser === true){
        return (
            <div className='sign-in'>
                <h1>Sign in here:</h1>
                <form className="sign-in-form" onSubmit={props.onSubmit}>
                    <input type='text' className='input-email-sign-in'
                            placeholder='Email'/>
                    <button onClick={props.signInHandler}>Login</button>
                    <button onClick={props.registerHandler}>Register</button>
                </form>
            </div>
        )
        } else {
        return (
            <div className='sign-in'>
                <h1>Sign in here:</h1>
                
                    <input  type='text'
                            className='input-username-sign-in'
                            placeholder='Username'
                            onChange={event => props.signedInUserHandler(event)}/>
                    <button onClick={props.signInHandler}>Login</button>
                    <button onClick={props.registerHandler}>Register</button>
               
                <p className='forgot-username' onClick={props.forgotHandler}>Forgot your username?</p>
            </div>
        )}
    }
   
    // return (
    //     <div className='sign-in'>
    //         <form className="sign-in-form" onSubmit={props.onSubmit}>
                
    //             <input  
    //                 type='text'
    //                 className='input-username-sign-in'
    //                 placeholder='Username'
    //                 ref = {input => props.username = input}
                
    //             />

    //         </form>
    //         <p className='forgot-username' onClick={props.forgotHandler}>Forgot your username?</p>}


    //     </div>
    
    // )


export default SignIn