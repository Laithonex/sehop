import {createSelector} from 'reselect'; 


const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections     
); 

// export const selectionCollectionsForPreview = createSelector(
//     [selectCollections],
//     collections => Object.keys(collections).map(key => collections[key]) // Object.keys is medthod which get us the keys of an object, and give it to an aray format 
// )

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
      collections ? Object.keys(collections).map(key => collections[key]) : []
  );


export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null )
    //find collection.id matching the Url parameter of our collection id map
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );