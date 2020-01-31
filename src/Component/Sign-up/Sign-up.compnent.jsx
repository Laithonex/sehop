import React from 'react';
import {connect} from 'react-redux';
import FromInput from '../from-input/from-input.component';

import { signUpStart } from '../../redux/user/user.actions';

// import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import'./Sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '', 
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password Do not match")
            return;
        }

        signUpStart({displayName, email, password})
        // try {
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password);

        //    await createUserProfileDocument(user,{displayName});

        //    this.setState({
        //     displayName: '',
        //     email: '', 
        //     password: '',
        //     confirmPassword:''

        //    });


        // }catch(error){
        //     console.error(error);

        // }
    };

    handleChange = event =>{
        const{name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const{displayName, email, password,  confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span> Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit= {this.handleSubmit} >
                   <FromInput  
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label = 'DisplayName'
                        required
                    />

                    <FromInput  
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label = 'email'
                        required
                    />

                    <FromInput  
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label = 'password'
                        required
                    />

                    <FromInput  
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                   <CustomButton type= 'submit'>Sing UP</CustomButton>     

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps) (SignUp)