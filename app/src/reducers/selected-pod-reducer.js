function selectedPodReducer(state = '', action) {
  const {
    podId,
    podImg,
    title,
    ownerId,
    ownerName,
    ownerImg,
    tagLine,
    location,
    description,
    createdAt,
    users,
  } = action;

  switch (action.type) {
    case 'UPDATE_SELECTED':
      return {
        podId,
        podImg,
        title,
        ownerId,
        ownerName,
        ownerImg,
        tagLine,
        location,
        description,
        createdAt,
        users,
      };
    case 'ClEAR_SELECTED':
      return '';
    default:
      return state;
  }
}

export default selectedPodReducer;
