import "./index.css";

function PostHeader({ title, description }) {
 return (
  <div className="post-page-header">
   <h1>{title}</h1>
   <span>{description}</span>
  </div>
 );
}

export default PostHeader;
