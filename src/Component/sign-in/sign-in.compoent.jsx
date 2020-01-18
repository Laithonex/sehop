import React from 'react';

import FromInput from '../from-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(Props){
        super(Props);
        this.state = {
            email:'',
            password:''
        };
    }

    handleSubmit= async event => {
        event.preventDefault();

        const {email, password} = this.state; 

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', passowrd:''});
        } catch(error){

        }
        
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]:value});
    };

    render () {
        return(
        <div className='sign-in'>
            <h2>I alreaddy Have an account</h2>
            <span>Sign In with you Email and Password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FromInput 
                name='email' 
                type='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='email'
                required
                />
                
                <FromInput 
                name='password' 
                type='password' 
                value={this.state.password}
                handleChange={this.handleChange} 
                label='password'
                required
                />
                <div className='buttons'>

                
                <CustomButton type ='submit'>
                    sign in 
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                    {''}
                    sign with Google {''}
                </CustomButton>
                </div>
            </form>
        </div>
        );
    }
}

export default SignIn;
