import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessgae";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fectingData, setFectingData] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFectingData(true);
      });
    setFectingData(false);
  }, []);

  return (
    <>
      {!fectingData && <LoadingSpinner />}
      {fectingData && postList.length == 0 ? (
        <WelcomeMessage />
      ) : postList ? (
        postList.map((post) => <Post key={post.id} post={post} />)
      ) : null}
    </>
  );
};

export default PostList;
