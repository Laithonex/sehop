import React from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {firestore, 
        convertCollectionsSnapshotToMap
        } from '../../firebase/firebase.utils'; 

import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../Component/with-spinner/with-spinner.component'; 

import CollectionsOverview  from '../../Component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'; 

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {
    
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null; 

    // firebase style    
    //  componentDidMount(){ 
    //     const {updateCollections} = this.props; 

    //     const collectionRef = firestore.collection('collections');
        
    //     collectionRef.onSnapshot(async snapshot => {
    //         console.log(snapshot)
    //     });

    //     this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
    //         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateCollections(collectionMap); 
    //         this.setState({loading: false});
    //     });
    //  };


    componentDidMount(){ // this the the promise style
        const {updateCollections} = this.props; 

        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(async snapshot => {
            console.log(snapshot)
        });

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap); 
            this.setState({loading: false});
        });
          
     }

    render(){
        const {match} = this.props;
        const {loading} = this.state; 
        return(  // Ref. To Shop collection
            <div className='shop-page'> 
            <Route exact path={`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} /> 
        <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} /> 
            </div>
        );
    }
}  

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
    

export default connect(null, mapDispatchToProps) (ShopPage);

//

// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// import CollectionsOverviewContainer from '../../Component/collections-overview/collections-overview.component';
// import CollectionPageContainer from '../shop/collection.container';

// class ShopPage extends React.Component {
//   componentDidMount() {
//     const { fetchCollectionsStartAsync } = this.props;

//     fetchCollectionsStartAsync();
//   }

//   render() {
//     const { match } = this.props;

//     return (
//       <div className='shop-page'>
//         <Route
//           exact
//           path={`${match.path}`}
//           component={CollectionsOverviewContainer}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           component={CollectionPageContainer}
//         />
//       </div>
//     );
//   }
// }

// // const mapDispatchToProps = dispatch => ({
// //     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// // });

// const mapDispatchToProps = dispatch => ({
//     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
//   });


// export default connect(
//   null,
//   mapDispatchToProps
// )(ShopPage);