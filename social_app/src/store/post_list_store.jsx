import { createContext, useReducer, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (state, action) => {
  let newPostList = state;

  if (action.type === "DELETE_POST") {
    newPostList = state.filter((post) => post.id != action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...state];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (title, body, hashtags, reactions) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        tags: hashtags,
      },
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addPosts(data.posts));
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addPosts: addPosts,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
