"use client";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const deletePost = (id) => {
    fetch(`http://localhost:5000/api/posts/${id}`, { method: "DELETE" })
      .then(() => setPosts(posts.filter((p) => p.id !== id)))
      .catch((err) => console.error("Error deleting post:", err));
  };

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 w-auto px-24">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={deletePost} />
      ))}
    </div>
  );
}
