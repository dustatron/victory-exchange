import { UPDATE_SELECT_OFFER } from './Types';

export const updateSelectedOffer = (offer, offerId) => async (dispatch) => {
  const action = {
    type: 'UPDATE_SELECT_OFFER',
    ...offer,
    ...{ offerId: offerId },
  };
  await dispatch(action);
};
