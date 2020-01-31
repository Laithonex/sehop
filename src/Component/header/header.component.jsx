import React from 'react';
import {connect} from 'react-redux'; // to get the current user from the reducer, not from the app.js
import {createStructuredSelector} from 'reselect'; 

import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import {signOutStart} from '../../redux/user/user.actions'; 
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>

            <OptionLink to='/shop'>
             SHOP
            </OptionLink >
            <OptionLink to='/shop'>
            CONTACT
            </OptionLink>
                      
            {currentUser ? (
                <OptionLink as='div' onClick={signOutStart} >SIGN OUT</OptionLink>
                ):(
                <OptionLink to="/signin">
                  SIGN IN 
                </OptionLink>
                )}  
                <CartIcon/>                 
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/>
        }
            
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden //we want to user value from the rootreducer, and then we want the current user value
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Header); //mapStateToProps[this is stander with redux code base] it allaes us to get the state