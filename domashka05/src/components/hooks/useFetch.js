import { useEffect, useState } from 'react';
import axios from 'axios';

const transformFetchResult = (data) => {
  const transformedData = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return transformedData;
};

const useFetch = (url) => {
  const [state, setState] = useState({ tasks: [] });
  useEffect(() => {
    const asyncFetch = async () => {
      const fetchResult = await axios.get(url);
      const transformedData = transformFetchResult(fetchResult.data);
      setState({ contacts: transformedData });
    };
    asyncFetch();
  }, [url]);
  return state;
};

export default useFetch;
