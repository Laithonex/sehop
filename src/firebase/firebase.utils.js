import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_CbpJgSXMwHzjArKPfePwXZwF61cPGAk",
  authDomain: "eshop-6fa4c.firebaseapp.com",
  databaseURL: "https://eshop-6fa4c.firebaseio.com",
  projectId: "eshop-6fa4c",
  storageBucket: "eshop-6fa4c.appspot.com",
  messagingSenderId: "148758146257",
  appId: "1:148758146257:web:b7aa5d4d733ff164bf69f0",
  measurementId: "G-MLD0RC8LZQ"
};

firebase.initializeApp(config);

  export const createUserProfileDocument   = async(userAuth, addtionalData) => {
    if (!userAuth) return; //this gets the data from a login. 

    const userRef = firestore.doc(`users/${userAuth.uid}`); //this gets a user id from all the data
    
    const snapShot = await userRef.get() // this gets all data that comes along with the id
    
    // this part is storing the data
    
    if(!snapShot.exists){        //it checks whether the data exists. on the siist property if it is true [exist] or faluse [not exist]
      const {displayName, email} = userAuth; //it asks the dispayname and email from the user auth
      const createdAt = new Date(); // new Date() creat a new date [java script object]

      try{        // beucse we are doing is asyncronce data requiest.
        await userRef.set({  //.set it creat it is a creat medthod (in the firebase). and we are creating a profile from the data that wea re getting from userAuth from the firbase libarary.
        displayName, 
        email, 
        createdAt,
        ...addtionalData
      })
      }catch (error) {
        console.log('error creating user', error.massage)
      }
      
    }
    
    return userRef; //the data will be callable to any of our js files and we can reuse it. 
    
    // console.log(snapRef)
  }
  
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => { //this jus to add the data in our firebase store so we don not do it manually. 
    const collectionRef = firestore.collection(collectionKey); 
    console.log(collectionRef);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      console.log(newDocRef);
      batch.set(newDocRef, obj);
    })
    return await batch.commit();
    
  }
  
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data(); 
      
      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    console.log(transformedCollection)
    
    return transformedCollection.reduce((accumulator, collection)=> {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
    
  }
  
  
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
  
  
  
