import React from 'react';
import SignIn from '../../Component/sign-in/sign-in.compoent';
import SignUp from '../../Component/Sign-up/Sign-up.compnent'
import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUp = () => (
    <div className='sing-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUp; 