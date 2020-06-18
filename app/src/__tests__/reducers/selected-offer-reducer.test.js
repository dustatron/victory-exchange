import selectedOfferReducer from '../../reducers/selected-offer-reducer';

describe('selectedOfferReducer', () => {
  const updateState = {
    offerId: 'string',
    podId: 'podId',
    podName: 'podName',
    author: 'userId',
    title: 'string',
    details: 'string',
    img: 'string',
    createdAt: 'date',
    replies: [
      {
        createdAt: 'date',
        userName: 'string',
        userId: 'userId',
        message: 'string'
      }
    ],
    active: true
  };

  test('Should return default state if no action type is passed to the reducer', () => {
    expect(selectedOfferReducer('', { type: null })).toEqual('');
  });

  test('Should successfully update selectedOffer', () => {
    const action = { type: 'UPDATE_SELECT_OFFER', ...updateState };
    expect(selectedOfferReducer('', action)).toEqual(updateState);
  });
});
