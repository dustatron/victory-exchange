import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

function MakeReply(props) {
  const firestore = useFirestore();
  const currentUser = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);
  const [inputState, setInputState] = useState('');

  const handleClick = () => {
    const thisReply = {
      replyId: v4(),
      userId: currentUser.uid,
      userName: profile.displayName,
      photoURL: profile.avatarUrl,
      message: inputState,
      createdAt: Date.now(),
    };
    const newReplies = [...props.offerReplies, thisReply];
    console.log('offerId', props.offerId);
    firestore.update(
      { collection: 'offers', doc: props.offerId },
      { replies: newReplies }
    );
  };

  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='reply-box'
          onChange={(event) => {
            setInputState(event.target.value);
          }}
        />
        <InputGroup.Append>
          <Button variant='outline-secondary' onClick={handleClick}>
            Submit
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
MakeReply.propTypes = {
  offerId: PropTypes.string,
  offerReplies: PropTypes.array,
};
export default MakeReply;
