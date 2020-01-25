import React from 'react';
import {Switch , Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Component/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-out/sign-in-and-sign-up.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import {auth, createUserProfileDocument } from './firebase/firebase.utils'; //,addCollectionAndDocuments
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'; 
// import { selectionCollectionsForPreview } from './redux/shop/shop.selector';

// import SignIn from './Component/sign-in.compoent/sign-in.compoent';



// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {
  unsubscribeFromAuth = null; 

  componentDidMount(){
    const {setCurrentUser } = this.props;
    
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){ //if user exist
       const userRef = await createUserProfileDocument(userAuth); //we get this 
       
         userRef.onSnapshot(snapShot => { //gets whetever on the snapshot/ we get that from the .get method 
            setCurrentUser({
                id: snapShot.id, 
                ...snapShot.data()
            });
         });
       }

      setCurrentUser(userAuth);

    createUserProfileDocument(userAuth)
    // addCollectionAndDocuments('collections',collectionsArry.map(({title, items}) =>({title, items})))

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }

  render(){
    return (  
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkoutPage' component={CheckoutPage}/>
          <Route 
          exact 
          path='/signin' 
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  // ,collectionsArry: selectionCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect ( mapStateToProps, mapDispatchToProps )(App); //makesure that hte values are in sequnce repectivly with const values
