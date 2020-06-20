import { combineReducers } from 'redux';
import selectedPodReducer from './selected-pod-reducer';
import selectedOfferReducer from './selected-offer-reducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import toggleDirectionReducer from './toggleDirection-reducer';

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  selectedPod: selectedPodReducer,
  selectedOffer: selectedOfferReducer,
  toggleDirection: toggleDirectionReducer,
});

export default rootReducer;
