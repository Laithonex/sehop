import {call, all} from 'redux-saga/effects';
// import {fetchCollectionsStart} from './shop/shop.sagas'; 
import {userSagas} from './user/user.saga';
import {cartSagas} from './cart/cart.sagas'; 
import {shopSagas} from './shop/shop.sagas'


export default function* rootSaga(){
    yield all([ 
        call(shopSagas), 
        call(userSagas),
        call(cartSagas) 
    ]);
}