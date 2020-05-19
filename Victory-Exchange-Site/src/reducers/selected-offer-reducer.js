function selectedOfferReducer(state = '', action) {
  const { offerId, podId, podName, author, title, details, img, createdAt, replies, active } = action;
  switch (action.type) {
    case 'UPDATE_SELECT_OFFER':
      const updatedState = {
        offerId,
        podId,
        podName,
        author,
        title,
        details,
        img,
        createdAt,
        replies,
        active
      };
      return updatedState;
    default:
      return state;
  }
}

export default selectedOfferReducer;
