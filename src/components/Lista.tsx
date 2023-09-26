import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
  

export const Lista = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Postagens</h1>
      <ul>
        {posts.map(post => (
          <li >
            <h1>nome {post.title}</h1>
            <br />
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* npm install axios */


