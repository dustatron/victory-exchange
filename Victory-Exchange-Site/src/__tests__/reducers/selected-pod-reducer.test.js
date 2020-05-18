import selectedPodReducer from '../../reducers/selected-pod-reducer';

describe('selectedPodReducer', () => {
  const currentPod = {
    podId: '1',
    podImg: 'string',
    title: 'podTitle',
    ownerId: 'userId',
    ownerName: 'Blanch',
    ownerImg: 'Golden Girls',
    tagLine: 'Where girls garden in Maimi',
    location: 'Maimi',
    description: 'golden girls garden in Maimi',
    createdAt: 'date',
    users: [ 'userId', 'userId' ]
  };

  test('Should return default state if no action type is passed to the reducer', () => {
    expect(selectedPodReducer('', { type: null })).toEqual('');
  });

  test('Should set selectedPod', () => {
    const action = { type: 'UPDATE_SELECTED', ...currentPod };
    expect(selectedPodReducer('', action)).toEqual(currentPod);
  });

  test('Should clear selectedPod', () => {
    const action = { type: 'ClEAR_SELECTED' };
    expect(selectedPodReducer(currentPod, action)).toEqual('');
  });
});
