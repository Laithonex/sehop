import React, {useState} from 'react';
import { connect } from 'react-redux';

import FromInput from '../from-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials ] = useState({ email:'', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        emailSignInStart(email, password);


    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    };

    
        return (
            <div className='sign-in'>
                <h2>I alreaddy Have an account</h2>
                <span>Sign In with you Email and Password</span>

                <form onSubmit={handleSubmit}>
                    <FromInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required
                    />

                    <FromInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>


                        <CustomButton type='submit'>
                            sign in
                </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            {''}
                            sign with Google {''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
