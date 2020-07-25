import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import '../../scss/_profile-details.scss';

function ProfileDetails({ profile }) {
  const { avatarUrl, displayName, email, bio, hobbies } = profile;

  return (
    <div className='profile-detail'>
      <div className='profile-detail-top'>
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
          {email}
        </h3>
      </div>
      {/* END TOP BOX */}

      <div className='profile-detail-info'>
        {bio && (
          <div className='profile-detail-info-bio'>
            <div className='profile-detail-info-title'>Bio</div>
            <div className='profile-detail-info-details'>{bio}</div>
          </div>
        )}
        {hobbies && (
          <div className='profile-detail-info-hobbies'>
            <div className='profile-detail-info-title'>Hobbies</div>
            <div className='profile-detail-info-details'>{hobbies}</div>
          </div>
        )}
        <div className='profile-detail-info-btn'>
          <Button
            className='profile-detail-btn'
            as={Link}
            to='/dashboard/profile/edit'
            block>
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});
export default connect(mapStateToProps)(ProfileDetails);
