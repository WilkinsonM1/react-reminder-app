import React, {Component} from 'react'

// the sign in component with display an input box where user types in her username and a submit button which
// will then go on to change the state inside out app class compponent to show she has signed in and show the list of reminders and AddReminder component
// there will also be a "forgot your username?" which the user can click on which display a different from where user inputs her email instead.
const SignIn  = ({ props, state }) => {

    switch(state){
        case 'forgotUser':
            return  <div className='sign-in'>
                        <form className="sign-in-form" onSubmit={props.onSubmit}>
                        
                            <input  
                            type='text'
                            className='input-email-sign-in'
                            placeholder='Username'
                            ref = {input => props.email = input}
                        
                            />
                            <button onClick={props.signInHandler}>Submit</button>

        
                        </form>

                    
                    </div>
        default: 
        return 
        <div className='sign-in'>
                 <form className="sign-in-form" onSubmit={props.onSubmit}>
                    
                     <input  
                        type='text'
                        className='input-username-sign-in'
                        placeholder='Username'
                        ref = {input => props.username = input}
                    
                    />
                    <button onClick={props.signInHandler}>Submit</button>
    
                </form>
                <p className='forgot-username' onClick={props.forgotHandler}>Forgot your username?</p>}
    
    
        </div>
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
}

export default SignIn