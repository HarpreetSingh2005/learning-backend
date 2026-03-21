import React, { useState, useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/harpreet2905/image_FcgR1uofB.jpg",
      caption: "goku son",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data.post));
  }, []);
  // setPosts([]);
  return (
    <section className="feed-section">
      <h1>Feed</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts</p>
      )}
    </section>
  );
};

export default Feed;
