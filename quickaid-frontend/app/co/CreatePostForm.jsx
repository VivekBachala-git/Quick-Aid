"use client";
import { useState } from "react";


export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Request");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, description, category, location, type };

    fetch("http://localhost:5000/api/posts", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then(res => res.json())
      .then(() => {
        setTitle("");
        setDescription("");
        setCategory("General");
        setLocation("");
        setType("Request");
        window.location.reload();
      })
      .catch(err => console.error("Error creating post:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <textarea
        placeholder="Post description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 w-full"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="General">General</option>
        <option value="Emergency">Emergency</option>
        <option value="Other">Other</option>
      </select>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="Request">Request</option>
        <option value="Offer">Offer</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>
    </form>
  );
}
