import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function ProfileEdit({ profile }) {
  const firebase = useFirebase();
  const history = useHistory();

  const [formData, setFormData] = useState({
    avatarUrl: '',
    displayName: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    setFormData({
      avatarUrl: profile.avatarUrl,
      displayName: profile.displayName,
      email: profile.email,
      bio: profile.bio,
      hobbies: profile.hobbies,
    });
  }, [profile.avatarUrl, profile.displayName, profile.email, profile.bio]);

  const { avatarUrl, displayName, email, bio, hobbies } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    firebase.updateProfile(formData);
    return history.push('/dashboard/profile');
  };
  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <img src={avatarUrl} alt='avatar' />
        <Form.Group>
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type='text'
            name='avatarUrl'
            value={avatarUrl}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className='text-muted'>
            This image represents you in the app.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>display Name</Form.Label>
          <Form.Control
            type='text'
            name='displayName'
            value={displayName}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className='text-muted'>
            This name will be displayed to others.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Hobbies</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            name='hobbies'
            value={hobbies}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>

        <Button variant='primary' type='text' name='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});
export default connect(mapStateToProps)(ProfileEdit);
