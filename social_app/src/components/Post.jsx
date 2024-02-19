import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostListContext } from "../store/post_list_store";
function Post({ post }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card ">
        <img className="card-img-top" />
        <div className="card-body " key={post.id}>
          <span
            key={post.id}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin6Fill />
          </span>
          <h5 name="card-title">{post.title}</h5>
          <p name="card-text paragraph ">{post.body}</p>
          {Array.isArray(post.tags) &&
            post.tags.map((tag, index) => (
              <span key={index} className="badge text-bg-primary tagBadges">
                {tag}
              </span>
            ))}
          <div className="alert alert-primary badges" role="alert">
            This Post is reacted by {post.reactions} peoples.
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
