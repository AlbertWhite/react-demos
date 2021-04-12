import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>update count</button>
      {count !== 5 && <InsideApp count={count} />}
    </>
  );
};

const InsideApp = ({ count }) => {
  useEffect(() => {
    console.log('inside useEffect');

    return () => {
      console.log('cleanup in useEffect');
    };
  }, [count]);

  console.warn(`render with count ${count}`);
  return <div>{count}</div>;
};

export default App;
