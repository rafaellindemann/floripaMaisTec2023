import { useNavigate } from "react-router-dom";
import "./index.css";

function Post({ post }) {
 const navigate = useNavigate();
 return (
  <div className="post-wrapper" onClick={() => navigate(post.path)}>
   <h3>{post.title}</h3>
   <h4>{post.date}</h4>
  </div>
 );
}

export default Post;
