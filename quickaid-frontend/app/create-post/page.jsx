"use client";

import CreatePostForm from "../co/CreatePostForm";


export default function CreatePostPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Help Request</h1>
      <CreatePostForm />
    </div>
  );
}
