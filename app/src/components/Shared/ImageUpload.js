import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { storage } from '../../firebase';
import { v4 } from 'uuid';
import { ProgressBar, Button } from 'react-bootstrap';

import '../scss/_upload.scss';

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log('file', file);
    if (file) {
      const fileType = file['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        setError('');
        setImage(file);
      } else {
        setError('Please select an image to upload');
      }
    } else {
      setError('Error');
    }
  };

  const handleUpdate = (e) => {
    const uniqueCode = v4();
    e.preventDefault();
    if (image) {
      const uploadTask = storage
        .ref(`images/${image.name}_${uniqueCode}`)
        .put(image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        (error) => {
          setError(error);
        },
        () => {
          storage
            .ref('images')
            .child(`${image.name}_${uniqueCode}`)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              props.onImage(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError('Error Please choose an image to upload');
    }
  };

  return (
    <div className='upload'>
      <Form>
        <Form.Group className='upload-color'>
          <Form.File
            className='upload-files'
            type='file'
            label='Upload an image'
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Button onClick={handleUpdate} variant='warning' block>
            Upload
          </Button>
        </Form.Group>
        {/* <input type='file' onChange={(e) => handleChange(e)} />
        <button onClick={handleUpdate}> Upload </button> */}
      </Form>
      <div class='upload-progress'>
        {progress > 0 ? (
          <ProgressBar striped variant='info' now={progress} />
        ) : (
          ''
        )}
        <p style={{ color: 'red' }}> {error} </p>
      </div>
    </div>
  );
};

export default ImageUpload;
