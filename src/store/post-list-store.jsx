import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
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

  return (
    <>
      <PostList.Provider
        value={{
          postList,
          addPost,
          deletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pondi",
    body: "Hi friends i am going to pondi for my vacations.Hoping  to enjoy a lot.Peace out",
    reactions: 10,
    userId: "user-2",
    tags: ["vacation", "pondi", "enjoying"],
  },
  {
    id: "2",
    title: "Life is going good",
    body: "Life is quite good in past 2 to 3 years.All i need is to do hardwork and a bit of luck",
    reactions: 248,
    userId: "user-9",
    tags: ["life", "take it easy", "simple"],
  },
];

export default PostListProvider;
