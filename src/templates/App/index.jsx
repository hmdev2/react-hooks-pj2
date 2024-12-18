import React from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
}

export default App;
