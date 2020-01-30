import React from 'react';
import {Route} from 'react-router-dom'; 
// import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

// import WithSpinner from '../../Component/with-spinner/with-spinner.component'; 

import CollectionOverviewContainer  from '../../Component/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container'; 

// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview); 
// const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {
    
    componentDidMount(){ // this the the promise style
        const {fetchCollectionsStart} = this.props; 
        fetchCollectionsStart();
    }
    
    render(){
        const {match} = this.props;
        return(  // Ref. To Shop collection
            <div className='shop-page'> 
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} /> 
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>} /> 
            </div>
        );
    }
}  


const mapDispatchToProps = dispatch => ({

    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    
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
// )(ShopPage);