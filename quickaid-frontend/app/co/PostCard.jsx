"use client";

export default function PostCard({ post, onDelete }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
      <p className="text-sm text-gray-500 mt-2">By {post.author}</p>

      <button
        onClick={() => onDelete(post.id)}
        className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
