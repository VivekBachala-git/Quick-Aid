// 📄 src/components/PostCarousel.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { MapPinned, Trash2,  HandHelping, MapPin, Heart, Users, AlertTriangle } from "lucide-react";

export default function PostCarousel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched posts:", data);
        setPosts(data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:5000/posts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      // Update local state to remove deleted post
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    }
  };

  // Group posts into chunks of 2
  const chunkedPosts = [];
  for (let i = 0; i < posts.length; i += 2) {
    chunkedPosts.push(posts.slice(i, i + 2));
  }

  return (
    <Carousel className="w-full max-w-5xl rounded-lg mx-auto mb-16 bg-gray-300/80 p-3 h-[350px] items-center">
      <CarouselContent className="p-3.5">
        {chunkedPosts.map((group, idx) => (
          <CarouselItem
            key={idx}
            className={`flex gap-4 ${
              group.length === 1 ? "justify-center w-auto" : ""
            }`}
          >
            {group.map((post) => (
              <Card key={post.id} className="w-1/2 relative h-74 bg-gray-200">
                <CardContent className="p-4 flex flex-col justify-between h-full ">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:text-red-700 "
                      title="Delete Post"
                    >
                      <Trash2 size={20} className="right-2 bottom-2" />
                    </button>
                  </div>
                  <div className="mt-auto">
                    <p className="text-gray-700 content-end">
                      {post.description}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {post.location} — {post.created_at}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
