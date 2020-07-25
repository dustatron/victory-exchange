import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageSearch from './ImageSearch';
import '../scss/_image-picker.scss';

function ImagePicker(props) {
  // New State
  const [searchResultData, setSearchResults] = useState([[], []]);
  const [viewData, setViewData] = useState({
    number: 1,
    searchType: 'Image Search',
    placerHolder: 'Search For Image Options... ',
  });
  const { number, searchType, placerHolder } = viewData;

  const handleImageClick = (link) => {
    // alert(link);
    props.updateImage(link);
  };

  const onPick = (pick) => {
    switch (pick) {
      case 1:
        setSearchResults([[], []]);
        return setViewData({
          number: 1,
          searchType: 'Image Search',
          placerHolder: 'Search For Image Options... ',
        });

      case 2:
        setSearchResults([]);
        return setViewData({
          number: 2,
          searchType: 'Upload',
          placerHolder: 'Upload an Still Image... ',
        });
      case 3:
        setSearchResults([]);
        return setViewData({
          number: 3,
          searchType: 'Your Link',
          placerHolder: 'Past a link to an image here... ',
        });
      default:
        return viewData;
    }
  };

  const onSearch = async (searchTerm) => {
    switch (number) {
      // Gifgy
      case 1:
        const giffyResult = await axios(
          `https://api.giphy.com/v1/stickers/search?api_key=${process.env.REACT_APP_GIPHY_API}&q=${searchTerm}&limit=16&rating=G&lang=en`
        );
        // const stillImageResult = await axios(
        //   `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=${searchTerm}&image_type=photo&orientation=horizontal&per_page=6`
        // );
        const Unsplash = await axios(
          `https://api.unsplash.com/search/photos?per_page=16&orientation=squarish&query=${searchTerm}`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH}`,
            },
          }
        );

        return setSearchResults([
          [...giffyResult.data.data],
          [...Unsplash.data.results],
          // [...stillImageResult.data.hits],
        ]);
      case 2:
        return setSearchResults(['coming soon...', searchTerm]);
      // Your Link
      case 3:
        return setSearchResults([{ url: searchTerm }]);
      default:
        return searchResultData;
    }
  };

  return (
    <div className='image-picker'>
      <div className='image-picker-options'>
        <div
          className='image-picker-options-choice'
          onClick={() => {
            onPick(1);
          }}>
          Image Search
        </div>
        <div
          className='image-picker-options-choice'
          onClick={() => {
            onPick(2);
          }}>
          Upload
        </div>
        <div
          className='image-picker-options-choice'
          onClick={() => {
            onPick(3);
          }}>
          Your Link
        </div>
      </div>
      <div className='image-picker-show-search'>
        <ImageSearch
          number={number}
          searchType={searchType}
          handleSearch={onSearch}
          results={searchResultData}
          onImageClick={handleImageClick}
          placerHolder={placerHolder}
        />
      </div>
    </div>
  );
}

ImagePicker.propTypes = {
  updateImage: PropTypes.func,
};

export default ImagePicker;
