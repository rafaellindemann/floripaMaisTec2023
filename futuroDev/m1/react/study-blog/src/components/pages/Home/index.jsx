import { useEffect, useState } from "react";
import HomeHeader from "../../organisms/HomeHeader";
import "./index.css";
import { getPosts } from "../../../services/posts";
import Post from "../../organisms/Post";

function Home() {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  setPosts(getPosts());
 }, []);
 return (
  <div>
   <HomeHeader />
   <div className="page-content">
    {posts?.length && (
     <>
      {posts.map((category) => (
       <div className="post-category" key={category.category}>
        <h2>{category.category}</h2>
        <div className="posts-list">
         {category.children.map((post) => (
          <Post post={post} key={post.title} />
         ))}
        </div>
       </div>
      ))}
     </>
    )}
   </div>
  </div>
 );
}

export default Home;
