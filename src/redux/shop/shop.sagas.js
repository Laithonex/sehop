import {takeEvery} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START)
}

