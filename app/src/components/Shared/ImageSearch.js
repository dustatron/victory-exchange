import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../scss/_image-search.scss';

const ImageSearch = ({
  number,
  searchType,
  handleSearch,
  results,
  onImageClick,
  placerHolder,
}) => {
  const [inputData, setInputData] = useState(' ');
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    cleanResults(number);
    setInputData('');
    // eslint-disable-next-line
  }, [results]);

  const onSubmit = () => {
    handleSearch(inputData);
  };
  const onFormChange = (e) => {
    setInputData(e.target.value);
  };

  const cleanResults = (value) => {
    switch (value) {
      // Image Search
      case 1:
        const gifs = results[0].map((result) => ({
          id: result.id,
          number: number,
          url: result.images.fixed_height.url,
          description: 'gif',
        }));
        const stills = results[1].map((result) => ({
          id: result.id,
          number: number,
          url: result.urls.thumb,
          description: result.description,
        }));
        return setRenderData([...stills, ...gifs]);
      // File Upload
      case 2:
        return setRenderData(
          results.map((result) => ({
            id: result.id,
            number: number,
            url: result.largeImageURL,
          }))
        );

      // User provided link
      case 3:
        return setRenderData(
          results.map((result) => ({
            id: 1,
            number: number,
            url: result.url,
          }))
        );

      default:
        return renderData;
    }
  };

  return (
    <div className='image-search'>
      <div>
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant='outline-info' onClick={() => onSubmit()}>
              {searchType}
            </Button>
          </InputGroup.Prepend>
          <FormControl
            placeholder={placerHolder}
            value={inputData}
            onChange={(e) => {
              onFormChange(e);
            }}
          />
        </InputGroup>
      </div>
      <div className='image-box'>
        {renderData.length !== 0 &&
          renderData.map((result) => {
            return (
              <div
                className='image-box-img-container'
                key={result.id}
                onClick={() => {
                  onImageClick(result.url);
                }}>
                <img src={result.url} alt={result.description} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

ImageSearch.propTypes = {
  number: PropTypes.number,
  searchType: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  placerHolder: PropTypes.string,
};

export default ImageSearch;
