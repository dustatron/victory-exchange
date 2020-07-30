import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PodListItem from './PodListItem';
import { Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import '../scss/_pod-search.scss';

function PodSearch(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputState, setInputState] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const allPods = useSelector((state) => state.firestore.data.pods);
  const handleSubmit = (event) => {
    event.preventDefault();
    const search = Object.entries(allPods).filter((pod) => {
      return (
        pod[1].title.toLowerCase().includes(inputState.toLowerCase()) ||
        pod[1].location.toLowerCase().includes(inputState.toLowerCase())
      );
    });
    setSearchResults(search);
  };

  const hanglePodClick = (podObject, podId) => {
    const action = {
      type: 'UPDATE_SELECTED',
      ...podObject,
      ...{ podId: podId },
    };
    dispatch(action);
    console.log(action);
    history.push(`/findpods/my-pods/${podId}`);
  };

  return (
    <Card className='pod-search'>
      <Card.Header>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Prepend>
              <Button variant='outline-secondary' type='submit'>
                Search
              </Button>
            </InputGroup.Prepend>
            <FormControl
              onChange={(event) => {
                setInputState(event.target.value);
              }}
            />
          </InputGroup>
        </Form>
      </Card.Header>
      <Card.Body>
        {searchResults.map((pod) => {
          return (
            <PodListItem
              pod={pod[1]}
              onPodClick={() => {
                hanglePodClick(pod[1], pod[0]);
              }}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default PodSearch;
