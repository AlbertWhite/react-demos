import React from 'react';
import { Text, Link, Box } from 'exterior-ui-lib';
import './App.css';

function App() {
  console.warn('ax', Text);
  return (
    <div className='App'>
      <Box marginTop={'180px'}>
        <Text>Hello world</Text>
        <Link href='https://www.google.com'>Hello world</Link>
      </Box>
    </div>
  );
}

export default App;
