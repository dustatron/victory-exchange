import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PodListItem from './PodListItem';

import { Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';

function PodSearch(props) {
  const dispatch = useDispatch();
  const [ inputState, setInputState ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const allPods = useSelector(state => state.firestore.data.pods);

  const handleSubmit = event => {
    event.preventDefault();
    const search = Object.values(allPods).filter(pod => {
      return pod.title.toLowerCase().includes(inputState.toLowerCase()) || pod.location.toLowerCase().includes(inputState.toLowerCase());
    });
    setSearchResults(search);
    console.log(searchResults);
  };

  const hanglePodClick = (podObject, podId) => {
    const action = { type: 'UPDATE_SELECTED', ...podObject, ...{ podId: podId } };
    dispatch(action);
    console.log(action);
    props.updateViewState(3);
    props.updateViewState(0);
  };

  return (
    <Card>
      <Card.Header>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Prepend>
              <Button variant='outline-secondary' type='submit'>
                Search
              </Button>
            </InputGroup.Prepend>
            <FormControl
              onChange={event => {
                setInputState(event.target.value);
              }}
            />
          </InputGroup>
        </Form>
      </Card.Header>
      <Card.Body>
        {searchResults.map(pod => {
          return <PodListItem pod={pod} onPodClick={hanglePodClick} />;
        })}
      </Card.Body>
    </Card>
  );
}

export default PodSearch;
