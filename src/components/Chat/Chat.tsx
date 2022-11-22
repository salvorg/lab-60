import React, {useEffect, useState} from 'react';
import {MessageMutation} from "../../types";
import ChatPost from "./ChatPost";

let newPostsUrl = 'http://146.185.154.90:8000/messages';


const Chat = () => {
  const [posts, setPosts] = useState<MessageMutation[]>([]);

  useEffect(() => {
      setInterval(async () => {
        const response = await fetch(newPostsUrl);

        if (response.ok) {
          const newPosts: MessageMutation[] = await response.json();

          if (newPosts.length > 0) {
            newPostsUrl = 'http://146.185.154.90:8000/messages?datetime=' + newPosts[newPosts.length - 1].datetime;
            setPosts(prev => (prev.concat(newPosts)).reverse());
          }
        }
      }, 2000);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <ChatPost
          key={Math.random()}
          id={post.id}
          message={post.message}
          author={post.author}
          datetime={post.datetime}
        />
      ))}
    </div>
  );
};

export default Chat;