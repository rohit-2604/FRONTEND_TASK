import React from 'react';
import useFetch from './hooks/useFetch';
import usePost from './hooks/usePost';

const MyComponent = () => {
  // Use a valid endpoint for fetching
  const { data: fetchData, loading: fetchLoading, error: fetchError } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  
  // Use a valid endpoint for posting
  const { data: postData, loading: postLoading, error: postError, postData: postDataFunc } = usePost('https://jsonplaceholder.typicode.com/posts');

  const handlePost = () => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    postDataFunc(payload);
  };

  return (
    <div>
      <h1>Data Fetch Example</h1>
      {fetchLoading && <p>Loading...</p>}
      {fetchError && <p>Error: {fetchError}</p>}
      {fetchData && <pre>{JSON.stringify(fetchData, null, 2)}</pre>}

      <h1>Data Post Example</h1>
      <button onClick={handlePost} disabled={postLoading}>
        {postLoading ? 'Sending...' : 'Send Data'}
      </button>
      {postError && <p>Error: {postError}</p>}
      {postData && <pre>{JSON.stringify(postData, null, 2)}</pre>}
    </div>
  );
};

export default MyComponent;
