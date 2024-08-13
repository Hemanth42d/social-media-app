import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags
            ? post.tags.map((tags) => (
                <span className="badge bg-primary hashtag" key={tags}>
                  {tags}
                </span>
              ))
            : null}
        </div>
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </>
  );
};

export default Post;
