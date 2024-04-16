import React, { useState } from "react";
import PostItems from "./PostItems";

const APIRequest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchingData = async () => {
    try {
      setLoading(true);
      let url = "https://jsonplaceholder.typicode.com/posts";

      let response = await fetch(url); // promise whether is it success or failure
      let data = await response.json(); // to convert json data to object
      console.log(data);
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Something went wrong plz refresh.....</h1>;
  }

  return (
    <>
      <h2>Click on the below button to get Data</h2>
      <button onClick={fetchingData}>Get Posts</button>
      {posts.length > 0 &&
        posts.map((element) => {
          return (
            <PostItems title={element.title} id={element.id} key={element.id} />
          );
        })}
    </>
  );
};

export default APIRequest;
