import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

function ImagePicker(props) {
  const [ imageOptions, setImageOptions ] = useState([]);
  const [ imageSearch, setImageSearch ] = useState('');

  const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas: "img0 img1 img2" "img3 img4 img5";
  `;

  // const getImages = async () => {
  //   const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=blKCb8PGWs0e4EtO2oYFZgZOdBjZxdyl&q=cherry&limit=6&offset=0&rating=G&lang=en`);

  //   setImageOptions(result.data.data);
  //   console.log(result.data.data);
  // };

  //Only render image list when state is empty
  if (imageOptions.length === 0) {
    // getImages();
  }

  const handleImageSearch = async searchTerm => {
    //with Giphy
    // const result = await axios(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.REACT_APP_GIPHY_API}&q=${searchTerm}&limit=6&offset=10&rating=G&lang=en`);

    //https://pixabay.com/api/docs/
    const result = await axios(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=${searchTerm}&image_type=photo&orientation=horizontal&per_page=6`);

    setImageOptions(result.data.hits);
    console.log(result.data.hits);
  };

  const handleImageClick = link => {
    props.updateImage(link);
  };

  return (
    <Card>
      <Card.Body>
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant='outline-secondary'>Search</Button>
          </InputGroup.Prepend>
          <FormControl
            aria-describedby='basic-addon1'
            onChange={event => {
              handleImageSearch(event.target.value);
            }}
          />
        </InputGroup>
        <ImageGrid>
          {imageOptions.map((item, index) => {
            //For Giphy
            // const { images: { fixed_height: { url } } } = item;
            const { largeImageURL } = item;
            return (
              <img
                onClick={() => {
                  handleImageClick(largeImageURL);
                }}
                key={index}
                style={{
                  gridArea: `img${index}`,
                  maxWidth: '100%',
                  maxHeight: '200px'
                }}
                src={largeImageURL}
              />
            );
          })}
        </ImageGrid>
      </Card.Body>
    </Card>
  );
}

ImagePicker.propTypes = {
  updateImage: PropTypes.func
};

export default ImagePicker;
