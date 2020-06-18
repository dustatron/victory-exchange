import { combineReducers } from 'redux';
import selectedPodReducer from './selected-pod-reducer';
import selectedOfferReducer from './selected-offer-reducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  selectedPod: selectedPodReducer,
  selectedOffer: selectedOfferReducer
});

export default rootReducer;
