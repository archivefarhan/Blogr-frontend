import { useState, useEffect } from "react";
import axios from "axios";

export function Blog() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      {localStorage.jwt === undefined ? (
        <>
          <p className="font-bold text-center text-4xl">Please Login!</p>
        </>
      ) : (
        <>
          <p className="mt-20 text-center font-black text-4xl">Articles</p>
          <br />
          <div className="mt-5 rounded-full mx-auto border border-sky-400 bg-transparent h-8 w-8 text-sky-400 text-xl font-black text-center shadow">
            <a href="/posts/new">+</a>
          </div>
          <div className="mt-20 grid grid-cols-3 auto-rows-auto p-3 gap-5 ml-20 mr-20">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
              >
                <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-200 via-sky-600 to-sky-300"></span>

                <div class="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">{post.title}</h3>

                    <p class="mt-1 text-xs font-medium text-gray-600">By User</p>
                  </div>
                </div>

                <div className="mt-2 mb-2 p-1">
                  <img src={post.image} className="w-1/2 h-auto mx-auto" />
                </div>

                <dl class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <dd class="text-xs text-gray-500">{post.created_at}</dd>
                    <dt class="text-sm font-medium text-gray-600">Published</dt>
                  </div>
                  <div class="flex flex-col-reverse text-right">
                    <a
                      href={`/posts/${post.id}`}
                      className="ml-60 rounded-md bg-sky-400 text-white text-sm w-24 text-center"
                    >
                      Read Article
                    </a>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
