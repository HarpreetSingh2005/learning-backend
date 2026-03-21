import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent webpage from reloading
    const data = new FormData(e.target);
    await axios
      .post("http://localhost:3000/create-post", data)
      .then((res) => {
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Post creation failed");
      });
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          required
        />
        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
