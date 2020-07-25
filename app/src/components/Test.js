import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [state, setState] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    apiCall('cats');
  }, []);

  const apiCall = async (searchTerm) => {
    try {
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&orientation=squarish&query=${searchTerm}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH}`,
          },
        }
      );

      setState(result.data.results);
    } catch (error) {
      console.error(error.message);
      setAlertMessage(error.message);
    }
  };
  return (
    <div>
      {alertMessage && alertMessage}
      <h1>Testing</h1>
      {state.map((item) => (
        <div>
          <h3>description : {item.description}</h3>
          <img src={item.urls.thumb} alt='cats' />
        </div>
      ))}
    </div>
  );
};

export default Test;
