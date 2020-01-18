import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; // to get the current user from the reducer, not from the app.js
import {createStructuredSelector} from 'reselect'; 
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'


const Header = ({currentUser, hidden}) => (
    <div className ='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>

            <Link className='option' to='/shop'>
             SHOP
            </Link>
            <Link className='option' to='/shop'>
            CONTACT
            </Link>
                      
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                ):(
                <Link className='option' to="/signin">
                                   SIGN IN </Link>
                )}  
                <CartIcon/>                 
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
            
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden //we want to user value from the rootreducer, and then we want the current user value
});

export default connect(mapStateToProps)(Header); //mapStateToProps[this is stander with redux code base] it allaes us to get the state