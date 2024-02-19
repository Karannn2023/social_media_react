import { useContext, useRef } from "react";
import { PostListContext } from "../store/post_list_store";

function createPost() {
  const { addPost } = useContext(PostListContext);

  const titleElement = useRef();
  const bodyElement = useRef();
  const hashtagsElement = useRef();
  const reactionsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const hashtags = hashtagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;
    addPost(title, body, hashtags, reactions);
    titleElement.current.value = "";
    bodyElement.current.value = "";
    hashtagsElement.current.value = "";
    reactionsElement.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 createPost">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h4> Post Title</h4>
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control inputbox"
          id="exampleInputEmail1"
        />
      </div>
      <div className="mb-3 createPost">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h4> Post Content</h4>
        </label>
        <textarea
          rows="4"
          type="text"
          ref={bodyElement}
          className="form-control inputbox"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 createPost">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h4> Apply Hashtags</h4>
        </label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control inputbox"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 createPost">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h4> Reactions</h4>
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control inputbox"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary Postbutton">
        Post
      </button>
    </form>
  );
}

export default createPost;
