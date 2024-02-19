import { useContext, useEffect, useState } from "react";
import Post from "./components/Post";
import Loader from "./components/loader";
import WelcomeMessage from "./components/welcomeMessage";
import { PostListContext } from "./store/post_list_store";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  return (
    <>
      {postList.length === 0 && <Loader></Loader>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
