import React from 'react';
import { Text, Link } from 'exterior-ui-lib';
import './App.css';

function App() {
  console.warn('ax', Text);
  return (
    <div className='App'>
      <Text>Hello world</Text>
      <Link href='https://www.google.com'>Hello world</Link>
    </div>
  );
}

export default App;
