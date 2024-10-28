import '~/App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [posts, setPosts] = useState([])
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => {
  //       setPosts(posts);
  //     })

  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   }
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // }, [])





  return (
    <div>
      <div>
        <button>concactoadai{width}cm</button>
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
