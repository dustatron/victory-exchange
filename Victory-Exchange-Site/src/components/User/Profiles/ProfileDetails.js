import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalStyel } from '../../Layout/GlobalStyle';
import { isLoaded } from 'react-redux-firebase';

function ProfileDetails({ profile }) {
  const { orange } = GlobalStyel;
  const { avatarUrl, displayName, email, bio, hobbies } = profile;

  return (
    <Fragment>
      <div
        style={{
          background: orange,
          minHeight: '50vh',
          position: 'relative',
          padding: '2rem',
        }}>
        {isLoaded(avatarUrl) ? (
          <img
            src={avatarUrl}
            alt='avatar'
            style={{
              border: '5px solid white',
              maxHeight: '70%',
              maxWidth: '70%',
              borderRadius: '100%',
              margin: 'auto',
              display: 'block',
            }}
          />
        ) : (
          ''
        )}

        <h1
          style={{ marginTop: '2rem', color: 'white' }}
          className='text-center'>
          {displayName}
        </h1>
        <h3 style={{ color: 'white' }} className='text-center'>
          email: {email}
        </h3>
      </div>
      <p>Bio: {bio}</p>
      <p>Hobbies: {hobbies}</p>
      <Button as={Link} to='/dashboard/profile/edit'>
        Edit
      </Button>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});
export default connect(mapStateToProps)(ProfileDetails);
